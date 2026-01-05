import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/page-wrapper';


const ForbiddenPage = memo(() => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      {t('Доступ запрещен')}
    </PageWrapper>
  )
});

export default ForbiddenPage;
