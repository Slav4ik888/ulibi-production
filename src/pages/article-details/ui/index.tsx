import { RoutePath } from 'app/providers/router/config';
import { ArticleComponent, ArticleList } from 'entities/article';
import { CommentsList } from 'entities/comment';
import { AddCommentForm } from 'features/add-comment-form';
import { selectArticleDetailsRecommendationsLoading } from 'pages/article-details/model/selectors/recommendations';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Button, ButtonTheme, Text } from 'shared/ui';
import { PageWrapper } from 'widgets/page-wrapper';
import { selectArticleDetailsCommentsLoading } from '../model/selectors';
import { addCommentForArticle, fetchCommentsByArticleId } from '../model/services';
import { fetchRecommendationsByArticleId } from '../model/services/fetch-recommendations-by-article-id';
import { selectArticleComments } from '../model/slice/article-details-comments';
import { selectArticleRecommendations } from '../model/slice/article-details-recommendations';
import { articleDetailsPageReducer } from '../model/slice/article-details-reducer';
import s from './index.module.scss';



const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};


const ArticlePageDetails = memo(() => {
  const
    { t } = useTranslation('article'),
    { t: c } = useTranslation('comments'),
    { id } = useParams<{ id: string }>(),
    dispatch = useAppDispatch(),
    navigate = useNavigate(),
    comments = useSelector(selectArticleComments.selectAll),
    recommendations = useSelector(selectArticleRecommendations.selectAll),
    recommendationsIsLoading = useSelector(selectArticleDetailsRecommendationsLoading),
    loading = useSelector(selectArticleDetailsCommentsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendationsByArticleId());
  });


  const handlerSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const handlerBackToList = useCallback(() => {
    navigate(RoutePath.ARTICLES);
  }, [navigate]);


  if (!id) return (
    <div>{t('Статья не найдена')}</div>
  );


  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageWrapper>
        <Button theme={ButtonTheme.SIMPLE} onClick={handlerBackToList}>
          {t('Назад к списку')}
        </Button>
        <ArticleComponent id={id} />
        <Text className={s.commentTitle} title={t('Рекомендуем')} />
        <ArticleList
          articles  = {recommendations}
          loading   = {recommendationsIsLoading}
          target    = '_blank'
          className = {s.recommendations}
        />
        <Text className={s.commentTitle} title={c('Комментарии')} />
        <AddCommentForm onSendComment={handlerSendComment} />
        <CommentsList
          comments = {comments}
          loading  = {loading}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  )
});

export default ArticlePageDetails;
