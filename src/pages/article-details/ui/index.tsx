import { ArticleDetails } from 'entities/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';


const ArticlePageDetails = memo(() => {
  const
    { t } = useTranslation('article'),
    { id } = useParams<{ id: string }>();

  if (!id) return (
    <div>{t('Статья не найдена')}</div>
  );

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  )
});

export default ArticlePageDetails;