/* eslint-disable max-len */
import { StateSchema } from 'app/providers/store';
import { Article } from '../types';

export const selectArticleDetailsModule  = (state: StateSchema) => state?.articleDetails;
export const selectArticleDetailsData    = (state: StateSchema) => selectArticleDetailsModule(state)?.data || {} as Article;
export const selectArticleDetailsError   = (state: StateSchema) => selectArticleDetailsModule(state)?.error;
export const selectArticleDetailsLoading = (state: StateSchema) => selectArticleDetailsModule(state)?.loading;
