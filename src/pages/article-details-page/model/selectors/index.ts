import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store';
import { selectArticleData } from 'entities/article';
import { selectUserAuthData } from 'entities/user';


export const selectArticleDetailsCommentsModule  = (state: StateSchema) => state?.articleDetailsPage?.comments;
export const selectArticleDetailsCommentsError = (state: StateSchema) =>
  selectArticleDetailsCommentsModule(state)?.error;

export const selectArticleDetailsCommentsLoading = (state: StateSchema) =>
  selectArticleDetailsCommentsModule(state)?.loading;

export const selectIsCanEditArticle = createSelector(
  selectUserAuthData,
  selectArticleData,
  (user, article) => {
    if (! article || ! user) return false

    return article.user?.id === user.id
  }
);
