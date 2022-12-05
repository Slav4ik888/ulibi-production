import { State } from 'app/providers/store';
import { Article } from '../types';

export const selectArticleDetailsModule  = (state: State) => state?.articleDetails;
export const selectArticleDetailsData    = (state: State) => selectArticleDetailsModule(state)?.data || {} as Article;
export const selectArticleDetailsError   = (state: State) => selectArticleDetailsModule(state)?.error;
export const selectArticleDetailsLoading = (state: State) => selectArticleDetailsModule(state)?.loading;
