import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/page-wrapper';



const AdminPanelPage = memo(() => {
  const { t } = useTranslation('roles');

  return (
    <PageWrapper>
      {t('AdminPanelPage')}
    </PageWrapper>
  )
});

export default AdminPanelPage;
