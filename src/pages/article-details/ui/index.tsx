import { ArticleDetails } from 'entities/article';
import { CommentsList } from 'entities/comment';
import { AddCommentForm } from 'features/add-comment-form';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Text } from 'shared/ui';
import { selectArticleDetailsCommentsLoading } from '../model/selectors';
import { addCommentForArticle, fetchCommentsByArticleId } from '../model/services';
import { articleDetailsCommentsReducer, selectArticleComments } from '../model/slice';
import s from './index.module.scss';



const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};


const ArticlePageDetails = memo(() => {
  const
    { t } = useTranslation('article'),
    { t: c } = useTranslation('comments'),
    { id } = useParams<{ id: string }>(),
    dispatch = useAppDispatch(),
    comments = useSelector(selectArticleComments.selectAll),
    loading = useSelector(selectArticleDetailsCommentsLoading);

  useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));


  const handlerSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);


  if (!id) return (
    <div>{t('Статья не найдена')}</div>
  );


  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ArticleDetails id={id} />
        <Text className={s.commentTitle} title={c('Комментарии')} />
        <AddCommentForm onSendComment={handlerSendComment} />
        <CommentsList
          comments = {comments}
          loading  = {loading}
        />
      </div>
    </DynamicModuleLoader>
  )
});

export default ArticlePageDetails;
