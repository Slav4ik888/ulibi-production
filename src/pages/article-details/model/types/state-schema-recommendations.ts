import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/article';


export interface StateSchemaArticleDetailsRecommendations extends EntityState<Article> {
  loading? : boolean
  error?   : string
}
