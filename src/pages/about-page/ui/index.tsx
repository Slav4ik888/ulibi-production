import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/page-wrapper';


const AboutPage = memo(() => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      {t('О сайте')}
    </PageWrapper>
  )
});

export default AboutPage;
