/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { reducerArticlesPage } from '../..';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../model/slice';
import { selectArticlesPageLoading, selectArticlesPageView } from '../../model/selectors';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import { PageWrapper } from 'widgets/page-wrapper';
import { ArticlePageFilters } from '../articles-page-filters';
import s from './index.module.scss';
import { useSearchParams } from 'react-router-dom';



const reducers: ReducersList = {
  articlesPage: reducerArticlesPage
};


const ArticlesPage = memo(() => {
  const
    { t } = useTranslation('article'),
    dispatch = useAppDispatch(),
    articles = useSelector(selectArticles.selectAll),
    loading  = useSelector(selectArticlesPageLoading),
    view     = useSelector(selectArticlesPageView),
    [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);


  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });


  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper onScrollEnd={onLoadNextPart}>
        <ArticlePageFilters />
        <ArticleList
          loading   = {loading}
          view      = {view}
          articles  = {articles}
          className = {s.list}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  )
});

export default ArticlesPage;
