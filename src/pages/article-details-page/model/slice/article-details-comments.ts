import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/store';
import { CommentType } from 'entities/comment'
import { fetchCommentsByArticleId } from '../services/fetch-comments-by-article-id';
import { StateSchemaArticleDetailsComments } from '../types/state-schema-article-details';


const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

export const selectArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

export const slice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<StateSchemaArticleDetailsComments>({
    loading  : false,
    error    : '',
    ids      : [],
    entities : {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      // fetchCommentsByArticleId
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error   = '';
        state.loading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }: PayloadAction<CommentType[]>) => {
        state.error   = '';
        state.loading = false;
        commentsAdapter.setAll(state, payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        state.error   = payload;
        state.loading = false;
      })
  }
})

export const {
  reducer : articleDetailsCommentsReducer
} = slice;
