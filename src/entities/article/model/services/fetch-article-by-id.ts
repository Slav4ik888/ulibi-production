import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article } from '../types';

export const fetchArticleById = createAsyncThunk<
  Article,
  string, // То что потом будем передавать на сервер
  ThunkConfig<string>
>('article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Article>(`/articles/${articleId}`, {
        // params: {
        //   _expand: 'user'
        // }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      return rejectWithValue('Error in fetchArticleById');
    }
});
