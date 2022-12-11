import { StateSchema } from 'app/providers/store';

export const selectAddCommentFormModule  = (state: StateSchema) => state?.addCommentForm;
export const selectAddCommentFormComment = (state: StateSchema) => selectAddCommentFormModule(state)?.comment || '';
export const selectAddCommentFormError   = (state: StateSchema) => selectAddCommentFormModule(state)?.error;
