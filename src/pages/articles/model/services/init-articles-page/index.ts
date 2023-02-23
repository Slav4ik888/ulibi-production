import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { actions as actionsArticlesPage } from '../../slice';
import { selectArticlesPageInited } from '../../selectors';
import { fetchArticlesList } from '../fetch-articles-list';



export const initArticlesPage = createAsyncThunk<
  void, // Response
  void, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const
      { dispatch, getState } = thunkApi,
      inited = selectArticlesPageInited(getState());

    if (! inited) {
      dispatch(actionsArticlesPage.initState());
      dispatch(fetchArticlesList({
        page: 1
      }));
    }
});
