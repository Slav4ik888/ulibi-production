import { cn } from 'shared/lib/class-names/index';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { VStack } from 'shared/ui/stack';
import { Text } from 'shared/ui';
import s from './index.module.scss';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { selectArticleComments } from '../../model/slice/article-details-comments';
import { selectArticleDetailsCommentsLoading } from '../../model/selectors';
import { addCommentForArticle, fetchCommentsByArticleId } from '../../model/services';
import { AddCommentForm } from 'features/add-comment-form';
import { CommentsList } from 'entities/comment';
import { fetchRecommendationsByArticleId } from '../../model/services/fetch-recommendations-by-article-id';



interface ArticleDetailsCommentsProps {
  id: string
  className?: string
}


export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();
  const comments = useSelector(selectArticleComments.selectAll);
  const loading = useSelector(selectArticleDetailsCommentsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendationsByArticleId());
  });


  const handlerSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);


  return (
    <VStack gap='8' className={cn('', {}, [className])}>
      <Text className={s.commentTitle} title={t('Комментарии')} />
      <AddCommentForm onSendComment={handlerSendComment} />
      <CommentsList
        comments = {comments}
        loading  = {loading}
      />
    </VStack>
  );
});
