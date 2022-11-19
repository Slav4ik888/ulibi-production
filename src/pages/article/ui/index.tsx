import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePage = memo(() => {
  const { t } = useTranslation('article');

  return (
    <div>
      {t('Статья')}
    </div>
  )
});

export default ArticlePage;
