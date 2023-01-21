import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { Article, ArticlesView } from 'entities/article/model/types/article';
import { fetchArticlesList } from '../services/fetch-articles-list';
import { ArticlesPageSchema } from '../types';
import * as LS from 'shared/lib/local-storage';


const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});


export const selectArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);


export const slice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    loading  : false,
    error    : undefined,
    ids      : [],
    entities : {},
    view     : ArticlesView.TILE
  }),
  reducers: {
    initState: (state) => {
      state.view = LS.getArticlesView() || ArticlesView.TILE;
    },
    setView: (state, { payload }: PayloadAction<ArticlesView>) => {
      state.view = payload;
      LS.setArticlesView(payload);
    }
  },
  extraReducers: builder => {
    builder
      // fetchArticlesList
      .addCase(fetchArticlesList.pending, (state) => {
        state.error   = '';
        state.loading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        state.error   = '';
        state.loading = false;
        articlesAdapter.setAll(state, payload);
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })
  }
})

export const { actions, reducer } = slice;
