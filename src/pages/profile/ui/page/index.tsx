import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from 'widgets/page-wrapper';
import { VStack } from 'shared/ui/stack';
import { EditableProfileCard } from 'features/editable-profile-card';
import { useTranslation } from 'react-i18next';



const ProfilePage = memo(() => {
  const { id }   = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (! id) return (
    <div>{t('Отсутствует Id статьи')}</div>
  );

  return (
    <PageWrapper>
      <VStack fullWidth gap='8'>
        <EditableProfileCard id={id} />
      </VStack>
    </PageWrapper>
  )
});

export default ProfilePage;
