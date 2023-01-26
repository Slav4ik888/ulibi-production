import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entities/article';


export interface ArticlesPageSchema extends EntityState<Article> {
  loading? : boolean
  error?   : string

  view?    : ArticlesView

  // Pagination
  page     : number
  limit?   : number
  hasMore  : boolean
}
