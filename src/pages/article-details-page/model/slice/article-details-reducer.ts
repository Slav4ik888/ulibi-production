import { combineReducers } from '@reduxjs/toolkit';
import { StateSchemaArticleDetailsPage } from '../types/state-schema-page';
import { articleDetailsCommentsReducer } from './article-details-comments';
import { articleDetailsRecommendationsReducer } from './article-details-recommendations';

export const articleDetailsPageReducer = combineReducers<StateSchemaArticleDetailsPage>({
  recommendations : articleDetailsRecommendationsReducer,
  comments        : articleDetailsCommentsReducer
});
