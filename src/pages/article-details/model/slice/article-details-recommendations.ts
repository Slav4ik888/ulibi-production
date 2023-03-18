import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/store';
import { Article } from 'entities/article';
import { fetchRecommendationsByArticleId } from '../services/fetch-recommendations-by-article-id';
import { StateSchemaArticleDetailsRecommendations } from '../types/state-schema-recommendations';


const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const selectArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

export const sliceArticleDetailsRecommendations = createSlice({
  name: 'articleDetailsRecommendations',
  initialState: recommendationsAdapter.getInitialState<StateSchemaArticleDetailsRecommendations>({
    loading  : false,
    error    : '',
    ids      : [],
    entities : {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      // fetchRecommendationsByArticleId
      .addCase(fetchRecommendationsByArticleId.pending, (state) => {
        state.error   = '';
        state.loading = true;
      })
      .addCase(fetchRecommendationsByArticleId.fulfilled, (state, { payload }: PayloadAction<Article[]>) => {
        state.error   = '';
        state.loading = false;
        recommendationsAdapter.setAll(state, payload);
      })
      .addCase(fetchRecommendationsByArticleId.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })
  }
})

export const {
  reducer : articleDetailsRecommendationsReducer
} = sliceArticleDetailsRecommendations;
