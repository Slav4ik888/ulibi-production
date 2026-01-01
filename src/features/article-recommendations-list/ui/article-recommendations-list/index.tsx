import { cn } from 'shared/lib/class-names/index';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/stack';
import { ArticleList } from 'entities/article';
import { Text } from 'shared/ui';
import s from './index.module.scss';
import { CommentCard } from 'entities/comment/ui/card';
import { useArticleRecommendationsList } from '../../api';



interface ArticleRecommendationsListProps {
  className?: string;
}


export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { data: articleRecommendations, isLoading, error } = useArticleRecommendationsList(3);

  if (isLoading) return (
    <VStack fullWidth>
      <CommentCard loading />
      <CommentCard loading />
      <CommentCard loading />
    </VStack>
  )

  if (error) return (
    <div>{t('Ошибка')}</div>
  );

  return (
    <VStack gap='8' className={cn('', {}, [className])}>
      <Text className={s.commentTitle} title={t('Рекомендуем')} />
      <ArticleList
        articles  = {articleRecommendations}
        target    = '_blank'
        className = {s.recommendations}
      />
    </VStack>
  );
});
