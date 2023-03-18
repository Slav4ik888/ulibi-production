import { StateSchema } from 'app/providers/store';


export const selectArticleDetailsCommentsModule  = (state: StateSchema) => state?.articleDetailsPage?.comments;
export const selectArticleDetailsCommentsError = (state: StateSchema) =>
  selectArticleDetailsCommentsModule(state)?.error;

export const selectArticleDetailsCommentsLoading = (state: StateSchema) =>
  selectArticleDetailsCommentsModule(state)?.loading;
