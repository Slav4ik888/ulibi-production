import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services';
import { Article, ArticleDetailsSchema } from '../types';


const initialState: ArticleDetailsSchema = {
  data     : undefined,
  loading  : false,
  error    : undefined
};


export const slice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    // updateArticleDetails: (state, { payload }: PayloadAction<ArticleDetails>) => {
    //   state.form = {
    //     ...state.form,
    //     ...payload
    //   }
    // }
  },
  extraReducers: builder => {
    builder
      // fetchArticleById
      .addCase(fetchArticleById.pending, (state) => {
        state.error   = '';
        state.loading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }: PayloadAction<Article>) => {
        state.data    = payload;
        state.error   = '';
        state.loading = false;
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })
  }
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer
} = slice;
