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

    try {
      if (! articleId) {
        throw new Error('No article id for comments');
      }

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
      return rejectWithValue('Error in fetchCommentsByArticleId');
    }
});
