import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article } from 'entities/article';



export const fetchRecommendationsByArticleId = createAsyncThunk<
  Article[], // Response
  void, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articleDetails/fetchRecommendationsByArticleId',
  async (_, thunkApi) => {
    const
      { extra, rejectWithValue } = thunkApi;

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: { _limit : 4 }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      return rejectWithValue('Error in articleDetails/fetchRecommendationsByArticleId');
    }
});
