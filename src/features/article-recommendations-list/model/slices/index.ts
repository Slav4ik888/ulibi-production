import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecommendationsListSchema } from '../types';

const initialState: ArticleRecommendationsListSchema = {
  
};

export const ArticleRecommendationsListSchemaSlice = createSlice({
  name: 'article-recommendations-list',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {
      
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: ArticleRecommendationsListSchemaActions } = ArticleRecommendationsListSchemaSlice;
export const { reducer: ArticleRecommendationsListSchemaReducer } = ArticleRecommendationsListSchemaSlice;
