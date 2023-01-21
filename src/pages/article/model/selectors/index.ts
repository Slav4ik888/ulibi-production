import { StateSchema } from 'app/providers/store';
import { ArticlesView } from 'entities/article';


export const selectArticlesPageModule  = (state: StateSchema) => state?.articlesPage;
export const selectArticlesPageError   = (state: StateSchema) => selectArticlesPageModule(state)?.error;
export const selectArticlesPageLoading = (state: StateSchema) => selectArticlesPageModule(state)?.loading;
export const selectArticlesPageView = (state: StateSchema) =>
  selectArticlesPageModule(state)?.view || ArticlesView.TILE;
