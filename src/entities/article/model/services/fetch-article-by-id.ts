import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article } from '../types';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined, // То что потом будем передавать на сервер
  ThunkConfig<string>
>('article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      if (! articleId) {
        throw new Error('No article id');
      }

      const { data } = await extra.api.get<Article>(`/articles/${articleId}`, {
        // params: {
        //   _expand: 'user'
        // }
      })

      if (! data) throw new Error('No data')

      return data;
    }
    catch (e) {
      return rejectWithValue('Error in fetchArticleById');
    }
});
