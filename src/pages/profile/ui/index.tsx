import { profileReducer } from 'entities/profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';


const reducers: ReducersList = {
  profile: profileReducer
};


const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {t('Профиль пользователя')}
      </div>
    </DynamicModuleLoader>
  )
});

export default ProfilePage;
