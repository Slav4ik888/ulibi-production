import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType> {
  loading? : boolean
  error?   : string
}
