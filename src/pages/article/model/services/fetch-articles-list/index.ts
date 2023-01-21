import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article } from 'entities/article';


export const fetchArticlesList = createAsyncThunk<
  Article[], // Response
  void,      // То что потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        // params: {
        //   _expand: 'user' // Чтобы запросить полную сущность пользователя, для отрисовки аватара
        // }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchArticlesList');
    }
});
