import { StateSchema } from 'app/providers/store';

export const selectArticleDetailsRecommendationsModule = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations;

export const selectArticleDetailsRecommendationsLoading = (state: StateSchema) =>
  selectArticleDetailsRecommendationsModule(state)?.loading || false;

export const selectArticleDetailsRecommendationsError = (state: StateSchema) =>
  selectArticleDetailsRecommendationsModule(state)?.error || false;
