import { cn } from 'shared/lib/class-names/index';
import { useTranslation } from 'react-i18next';
import cls from './index.module.scss';
import { memo } from 'react';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.articleRecommendationsList, {}, [className])}>
      
    </div>
  );
});
