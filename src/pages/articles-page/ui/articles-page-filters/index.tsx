import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cn } from 'shared/lib';
import { useAppDispatch } from 'shared/lib/hooks';
import { ArticleSortField, ArticlesView, ArticleType } from 'entities/article';
import { actions as actionsArticlesPage } from '../../model/slice';
import {
  selectArticlesPageOrder, selectArticlesPageSearch, selectArticlesPageSort,
  selectArticlesPageType,
  selectArticlesPageView
} from '../../model/selectors';
import { ArticleViewSelector } from 'features/article-view-selector';
import { Card } from 'shared/ui';
import { Input } from 'shared/ui/input';
import { ArticleSortSelector } from 'features/article-sort-selector';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../../model/services';
import { useDebounce } from 'shared/lib/hooks/use-debounce';
import { ArticleTypeTabs } from 'features/article-type-tabs';
import { TabItem } from 'shared/ui/tabs';
import s from './index.module.scss';



interface Styles {
  root?  : string
}


interface Props {
  styles?: Styles
}


export const ArticlePageFilters = memo(({ styles = {} }: Props) => {
  const
    { t }    = useTranslation('article'),
    dispatch = useAppDispatch(),
    view     = useSelector(selectArticlesPageView),
    sort     = useSelector(selectArticlesPageSort),
    order    = useSelector(selectArticlesPageOrder),
    search   = useSelector(selectArticlesPageSearch),
    type     = useSelector(selectArticlesPageType);


  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const handlerChangeView = useCallback((view: ArticlesView) => {
    dispatch(actionsArticlesPage.setView(view));
  }, [dispatch]);

  const handlerChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(actionsArticlesPage.setSort(sort));
    dispatch(actionsArticlesPage.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handlerChangeOrder = useCallback((order: SortOrder) => {
    dispatch(actionsArticlesPage.setOrder(order));
    dispatch(actionsArticlesPage.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handlerChangeSearch = useCallback((search: string) => {
    dispatch(actionsArticlesPage.setSearch(search));
    dispatch(actionsArticlesPage.setPage(1));
    debounceFetchData();
  }, [dispatch, debounceFetchData]);

  const handlerChangeType = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(actionsArticlesPage.setType(tab.value));
    dispatch(actionsArticlesPage.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);


  return (
    <div className={cn(s.root, {}, [styles.root])}>
      <div className={s.sortWrapper}>
        <ArticleSortSelector
          sort          = {sort}
          onChangeSort  = {handlerChangeSort}
          order         = {order}
          onChangeOrder = {handlerChangeOrder}
        />
        <ArticleViewSelector
          view     = {view}
          onToggle = {handlerChangeView}
        />
      </div>
      <Card className={s.search}>
        <Input
          label    = {t('Поиск')}
          value    = {search}
          onChange = {handlerChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        type         = {type}
        styles       = {{ root: s.tabs }}
        onChangeType = {handlerChangeType}
      />
    </div>
  )
});
