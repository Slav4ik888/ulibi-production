import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePageDetails = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      {t('Детали статьи')}
    </div>
  )
});

export default ArticlePageDetails;
