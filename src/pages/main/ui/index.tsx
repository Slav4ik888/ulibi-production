import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/ui';


const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      {t('Главная страница')}
    </PageWrapper>
  )
};

export default MainPage;
