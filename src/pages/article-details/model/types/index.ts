import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/comment';

export interface StateArticleDetailsComments extends EntityState<CommentType> {
  loading? : boolean
  error?   : string
}
