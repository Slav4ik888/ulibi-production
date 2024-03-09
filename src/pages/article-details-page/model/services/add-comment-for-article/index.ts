import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { selectArticleData } from 'entities/article';
import { CommentType } from 'entities/comment';
import { selectUserAuthData } from 'entities/user';
import { fetchCommentsByArticleId } from '../fetch-comments-by-article-id';



export const addCommentForArticle = createAsyncThunk<
  CommentType, // Return
  string,      // Enter
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (message, thunkApi) => {
    const
      { extra, rejectWithValue, dispatch, getState } = thunkApi,
      userData  = selectUserAuthData(getState()),
      articleId = selectArticleData(getState()).id;

    if (!userData || !message || !articleId) rejectWithValue('sendComment no data');

    try {
      const { data } = await extra.api.post<CommentType>('/comments', {
        articleId,
        userId    : userData?.id,
        message
      });

      if (!data) throw new Error('Empty response');

      dispatch(fetchCommentsByArticleId(articleId));
      return data;
    }
    catch (e) {
      return rejectWithValue('sendComment error');
    }
  }
);
