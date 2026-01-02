import { memo } from 'react';
import { ArticleList } from 'entities/article';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../model/slice';
import { selectArticlesPageError, selectArticlesPageLoading, selectArticlesPageView } from '../../model/selectors';
import { initArticlesPage } from '../../model/services';
import s from './index.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



interface ArticleInListProps {
  className?: string
}


export const ArticleInList = memo((props: ArticleInListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(selectArticles.selectAll);
  const loading  = useSelector(selectArticlesPageLoading);
  const error    = useSelector(selectArticlesPageError);
  const view     = useSelector(selectArticlesPageView);
  const [searchParams] = useSearchParams();


  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) return (
    <div>{t('Ошибка при загрузке статьи')}</div>
  );

  return (
    <ArticleList
      loading   = {loading}
      view      = {view}
      articles  = {articles}
      className = {className}
    />
  )
});
