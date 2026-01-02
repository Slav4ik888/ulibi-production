import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { reducerArticlesPage } from '../..';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { fetchNextArticlesPage, initArticlesPage } from '../../model/services';
import { PageWrapper } from 'widgets/page-wrapper';
import { ArticlePageFilters } from '../articles-page-filters';
import s from './index.module.scss';
import { useSearchParams } from 'react-router-dom';
import { ArticleInList } from '../article-in-list';



const reducers: ReducersList = {
  articlesPage: reducerArticlesPage
};


const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

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
        <ArticleInList className={s.list} />
      </PageWrapper>
    </DynamicModuleLoader>
  )
});

export default ArticlesPage;
