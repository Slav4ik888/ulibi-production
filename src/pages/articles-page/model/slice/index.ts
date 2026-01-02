import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { Article, ArticleSortField, ArticlesView, ArticleType } from 'entities/article';
import { fetchArticlesList } from '../services/fetch-articles-list';
import { StateSchemaArticlesPage } from '../types';
import { SortOrder } from 'shared/types'
import * as LS from 'shared/lib/local-storage';


const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});


export const selectArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);


export const slice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<StateSchemaArticlesPage>({
    loading  : false,
    error    : undefined,
    ids      : [],
    entities : {},
    _inited  : false,
    view     : 'TILE',
    page     : 1,
    limit    : 9,
    hasMore  : true,
    search   : '',
    sort     : 'createdAt',
    order    : 'asc',
    type     : 'ALL'
  }),
  reducers: {
    initState: (state) => {
      const view    = LS.getArticlesView() || 'TILE';
      state.view    = view;
      state.limit   = view === 'LIST' ? 2 : 4;
      state._inited = true;
    },
    setView: (state, { payload }: PayloadAction<ArticlesView>) => {
      state.view = payload;
      LS.setArticlesView(payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setOrder: (state, { payload }: PayloadAction<SortOrder>) => {
      state.order = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setSort: (state, { payload }: PayloadAction<ArticleSortField>) => {
      state.sort = payload;
    },
    setType: (state, { payload }: PayloadAction<ArticleType>) => {
      state.type = payload;
    }
  },
  extraReducers: builder => {
    builder
      // fetchArticlesList
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        state.error   = '';
        state.loading = true;

        if (meta.arg.replace) articlesAdapter.removeAll(state)
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action // PayloadAction<Article[]>
      ) => {
        state.error   = '';
        state.loading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) articlesAdapter.setAll(state, action.payload)
        else articlesAdapter.addMany(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
