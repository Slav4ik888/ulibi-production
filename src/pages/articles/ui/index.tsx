/* eslint-disable max-len */
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticlesView } from 'entities/article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { actionsArticlesPage, reducerArticlesPage } from '..';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { selectArticles } from '../model/slice';
import { selectArticlesPageLoading, selectArticlesPageView } from '../model/selectors';
import { ArticleToggleViewSelector } from 'features/article-toggle-view-selector';
import { PageWrapper } from 'shared/ui';
import { fetchNextArticlesPage, initArticlesPage } from '../model/services';


const reducers: ReducersList = {
  articlesPage: reducerArticlesPage
};


const ArticlesPage = memo(() => {
  const
    { t } = useTranslation('article'),
    dispatch = useAppDispatch(),
    articles = useSelector(selectArticles.selectAll),
    loading  = useSelector(selectArticlesPageLoading),
    view     = useSelector(selectArticlesPageView);


  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);


  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  const handlerToggleView = useCallback((view: ArticlesView) => {
    dispatch(actionsArticlesPage.setView(view));
  }, [dispatch]);


  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper onScrollEnd={onLoadNextPart}>
        <ArticleToggleViewSelector
          view     = {view}
          onToggle = {handlerToggleView}
        />
        <ArticleList
          loading  = {loading}
          view     = {view}
          articles = {articles}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  )
});

export default ArticlesPage;
