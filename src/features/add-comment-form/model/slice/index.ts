import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { addCommentForm } from '../services';
import { AddCommentFormSchema } from '../types';


const initialState: AddCommentFormSchema = {
  comment  : '',
  error    : ''
};


export const slice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setComment: (state, { payload }: PayloadAction<string>) => {
      state.comment = payload;
      state.error   = '';
    }
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(addCommentFormByUsername.pending, (state, actions) => {
  //       state.error = undefined;
  //       state.loading = true;
  //     })
  //     .addCase(addCommentFormByUsername.fulfilled, (state, actions) => {
  //       state.error = undefined;
  //       state.loading = false;
  //     })
  //     .addCase(addCommentFormByUsername.rejected, (state, { payload }) => {
  //       state.error = payload;
  //       state.loading = false;
  //     })
  // }
})

export const { actions: addCommentFormActions } = slice;
export const { reducer: addCommentFormReducer } = slice;
