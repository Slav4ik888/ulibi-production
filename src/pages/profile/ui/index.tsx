import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';


const reducers: ReducersList = {
  profile: profileReducer
};


const ProfilePage = memo(() => {
  const
    { t }    = useTranslation('profile'),
    dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);


  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
});

export default ProfilePage;
