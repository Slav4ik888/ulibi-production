import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { CommentType } from 'entities/comment';


export const fetchCommentsByArticleId = createAsyncThunk<
  CommentType[],
  string | undefined, // То что потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) return rejectWithValue('Error in fetchCommentsByArticleId');

    try {
      const { data } = await extra.api.get<CommentType[]>('/comments', {
        params: {
          articleId,
          _expand: 'user' // Чтобы запросить полную сущность пользователя, для подстановки в комментарий
        }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchCommentsByArticleId');
    }
});
