import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article } from 'entities/article';
import { selectArticlesPageLimit } from '../../selectors';


interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[], // Response
  FetchArticlesListProps, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const
      { page = 1 } = props,
      { extra, rejectWithValue, getState } = thunkApi,
      limit = selectArticlesPageLimit(getState());

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          // _expand: 'user' // Чтобы запросить полную сущность пользователя, для отрисовки аватара,
          _limit : limit,
          _page  : page
        }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      console.log('e: ', e);
      return rejectWithValue('Error in fetchArticlesList');
    }
});
