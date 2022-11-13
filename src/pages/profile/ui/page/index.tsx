import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { ProfileHeader } from '../header';
import {
  fetchProfileData, Profile, ProfileCard, profileReducer,
  selectProfileForm, selectProfileError, selectProfileLoading, selectProfileReadonly
} from 'entities/profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { profileActions } from 'entities/profile/model/slice';



const reducers: ReducersList = {
  profile: profileReducer
};


const ProfilePage = memo(() => {
  const
    dispatch = useAppDispatch(),
    formData  = useSelector(selectProfileForm),
    readOnly = useSelector(selectProfileReadonly),
    loading  = useSelector(selectProfileLoading),
    error    = useSelector(selectProfileError);


  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const handlerChange = useCallback((value: string | number, name: string) => dispatch(
    profileActions.updateProfile({ [name]: value } as unknown as Profile)
  ), [dispatch]);


  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfileHeader />
        <ProfileCard
          profile  = {formData}
          loading  = {loading}
          error    = {error}
          readOnly = {readOnly}
          onChange = {handlerChange}
        />
      </div>
    </DynamicModuleLoader>
  )
});

export default ProfilePage;
