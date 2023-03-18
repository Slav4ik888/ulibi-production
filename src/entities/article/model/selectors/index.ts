/* eslint-disable max-len */
import { StateSchema } from 'app/providers/store';
import { Article } from '../types';

export const selectArticleModule  = (state: StateSchema) => state?.article;
export const selectArticleData    = (state: StateSchema) => selectArticleModule(state)?.data || {} as Article;
export const selectArticleError   = (state: StateSchema) => selectArticleModule(state)?.error;
export const selectArticleLoading = (state: StateSchema) => selectArticleModule(state)?.loading;
