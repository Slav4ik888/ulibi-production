import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticlesView, ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types';


export interface StateSchemaArticlesPage extends EntityState<Article> {
  loading? : boolean
  error?   : string

  _inited? : boolean

  // Filters
  view?    : ArticlesView
  order?   : SortOrder
  sort?    : ArticleSortField
  search?  : string
  type?    : ArticleType

  // Pagination
  page     : number
  limit    : number
  hasMore  : boolean
}
