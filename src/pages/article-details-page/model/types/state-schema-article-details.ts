import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/comment';

export interface StateSchemaArticleDetailsComments extends EntityState<CommentType> {
  loading? : boolean
  error?   : string
}
