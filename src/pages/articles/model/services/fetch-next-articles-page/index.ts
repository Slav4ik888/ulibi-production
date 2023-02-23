import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import {
  selectArticlesPageHasMore, selectArticlesPageLoading, selectArticlesPageNum
} from '../../selectors';
import { actions } from '../../slice';
import { fetchArticlesList } from '../fetch-articles-list';



export const fetchNextArticlesPage = createAsyncThunk<
  void, // Response
  void, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const
      { dispatch, getState } = thunkApi,
      hasMore = selectArticlesPageHasMore(getState()),
      page = selectArticlesPageNum(getState()),
      loading = selectArticlesPageLoading(getState());

    if (hasMore && ! loading) {
      dispatch(actions.setPage(page + 1));
      dispatch(fetchArticlesList({
        page: page + 1
      }));
    }
});
