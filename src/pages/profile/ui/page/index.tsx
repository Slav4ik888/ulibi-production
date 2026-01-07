import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from 'widgets/page-wrapper';
import { VStack } from 'shared/ui/stack';
import { EditableProfileCard } from 'features/editable-profile-card';



const ProfilePage = memo(() => {
  const { id }   = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <VStack fullWidth gap='8'>
        <EditableProfileCard id={id} />
      </VStack>
    </PageWrapper>
  )
});

export default ProfilePage;
