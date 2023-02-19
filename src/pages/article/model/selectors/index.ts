/* eslint-disable max-len */
import { StateSchema } from 'app/providers/store';
import { ArticlesView } from 'entities/article';


export const selectArticlesPageModule  = (state: StateSchema) => state?.articlesPage;
export const selectArticlesPageError   = (state: StateSchema) => selectArticlesPageModule(state)?.error;
export const selectArticlesPageLoading = (state: StateSchema) => selectArticlesPageModule(state)?.loading;
export const selectArticlesPageView    = (state: StateSchema) => selectArticlesPageModule(state)?.view    || ArticlesView.TILE;
export const selectArticlesPageNum     = (state: StateSchema) => selectArticlesPageModule(state)?.page    || 1;
export const selectArticlesPageLimit   = (state: StateSchema) => selectArticlesPageModule(state)?.limit   || 1;
export const selectArticlesPageHasMore = (state: StateSchema) => selectArticlesPageModule(state)?.hasMore || false;
