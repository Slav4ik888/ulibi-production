import { State } from 'app/providers/store';


export const selectArticleDetailsCommentsModule  = (state: State) => state?.articleDetailsComments;
export const selectArticleDetailsCommentsError   = (state: State) => selectArticleDetailsCommentsModule(state)?.error;
export const selectArticleDetailsCommentsLoading = (state: State) => selectArticleDetailsCommentsModule(state)?.loading;
