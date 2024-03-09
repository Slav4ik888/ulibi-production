import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { Article, ArticleType } from 'entities/article';
import { addQueryParams } from 'shared/lib/url/add-query-params';
import {
  selectArticlesPageLimit, selectArticlesPageOrder,
  selectArticlesPageSearch, selectArticlesPageSort,
  selectArticlesPageNum,
  selectArticlesPageType
} from '../../selectors';


interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[], // Response
  FetchArticlesListProps, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkApi) => {
    const
      { extra, rejectWithValue, getState } = thunkApi,
      page   = selectArticlesPageNum(getState()),
      limit  = selectArticlesPageLimit(getState()),
      sort   = selectArticlesPageSort(getState()),
      order  = selectArticlesPageOrder(getState()),
      search = selectArticlesPageSearch(getState()),
      type   = selectArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type
      });

      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          // _expand: 'user' // Чтобы запросить полную сущность пользователя, для отрисовки аватара,
          _limit : limit,
          _page  : page,
          _sort  : sort,
          _order : order,
          q      : search,
          type   : type === ArticleType.ALL ? undefined : type
        }
      })

      if (!data) throw new Error()

      return data;
    }
    catch (e) {
      return rejectWithValue('Error in fetchArticlesList');
    }
});
