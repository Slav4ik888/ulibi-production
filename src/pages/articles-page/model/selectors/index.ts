/* eslint-disable max-len */
import { StateSchema } from 'app/providers/store';
import { ArticleSortField, ArticlesView, ArticleType } from 'entities/article';


export const selectArticlesPageModule  = (state: StateSchema) => state?.articlesPage;
export const selectArticlesPageError   = (state: StateSchema) => selectArticlesPageModule(state)?.error;
export const selectArticlesPageLoading = (state: StateSchema) => selectArticlesPageModule(state)?.loading;
export const selectArticlesPageInited  = (state: StateSchema) => selectArticlesPageModule(state)?._inited;
export const selectArticlesPageView    = (state: StateSchema) => selectArticlesPageModule(state)?.view    || ArticlesView.TILE;
export const selectArticlesPageNum     = (state: StateSchema) => selectArticlesPageModule(state)?.page    || 1;
export const selectArticlesPageOrder   = (state: StateSchema) => selectArticlesPageModule(state)?.order   ?? 'asc';
export const selectArticlesPageSearch  = (state: StateSchema) => selectArticlesPageModule(state)?.search  ?? '';
export const selectArticlesPageSort    = (state: StateSchema) => selectArticlesPageModule(state)?.sort    ?? ArticleSortField.CREATED;
export const selectArticlesPageType    = (state: StateSchema) => selectArticlesPageModule(state)?.type    ?? ArticleType.ALL;
export const selectArticlesPageLimit   = (state: StateSchema) => selectArticlesPageModule(state)?.limit   || 1;
export const selectArticlesPageHasMore = (state: StateSchema) => selectArticlesPageModule(state)?.hasMore || false;
