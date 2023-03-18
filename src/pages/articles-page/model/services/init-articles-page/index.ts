import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { actions as actionsArticlesPage } from '../../slice';
import { selectArticlesPageInited } from '../../selectors';
import { fetchArticlesList } from '../fetch-articles-list';
import { ArticleSortField, ArticleType } from 'entities/article';
import { SortOrder } from 'shared/types';



export const initArticlesPage = createAsyncThunk<
  void, // Response
  URLSearchParams, // То что принимает, а потом будем передавать на сервер
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const
      { dispatch, getState } = thunkApi,
      inited = selectArticlesPageInited(getState());

    if (!inited) {
      const
        orderFromUrl  = searchParams.get('order') as SortOrder,
        sortFromUrl   = searchParams.get('sort') as ArticleSortField,
        searchFromUrl = searchParams.get('search'),
        typeFromUrl   = searchParams.get('type') as ArticleType;

      if (orderFromUrl)  dispatch(actionsArticlesPage.setOrder(orderFromUrl))
      if (sortFromUrl)   dispatch(actionsArticlesPage.setSort(sortFromUrl))
      if (searchFromUrl) dispatch(actionsArticlesPage.setSearch(searchFromUrl))
      if (typeFromUrl)   dispatch(actionsArticlesPage.setType(typeFromUrl))

      dispatch(actionsArticlesPage.initState());
      dispatch(fetchArticlesList({}));
    }
});
