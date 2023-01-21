import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { ProfileHeader } from '../header';
import {
  fetchProfileData, Profile, ProfileCard, profileReducer,
  selectProfileForm, selectProfileError, selectProfileLoading, selectProfileReadonly, selectProfileValidateErrors
} from 'entities/profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { profileActions } from 'entities/profile/model/slice';
import { Text, TextTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';


const reducers: ReducersList = {
  profile: profileReducer
};


const ProfilePage = memo(() => {
  const
    { t }          = useTranslation('profile'),
    { id }         = useParams<{ id: string }>(),
    dispatch       = useAppDispatch(),
    formData       = useSelector(selectProfileForm),
    readOnly       = useSelector(selectProfileReadonly),
    loading        = useSelector(selectProfileLoading),
    error          = useSelector(selectProfileError),
    validateErrors = useSelector(selectProfileValidateErrors);

  const validateErrorTranslate = {
    INVALID_DATA      : t('Некорректные данные'),
    INVALID_USER_DATA : t('Некорректное имя или фамилия'),
    INVALID_AGE       : t('Некорректный возраст'),
    INVALID_COUNTRY   : t('Некорректная страна'),
    SERVER_ERROR      : t('Серверная ошибка')
  }

  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id));
  });

  const handlerChange = useCallback((value: string | number, name: string) => dispatch(
    profileActions.updateProfile({ [name]: value } as unknown as Profile)
  ), [dispatch]);


  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        <ProfileHeader />
        {
          validateErrors?.map(err => (
            <Text
              key   = {err}
              theme = {TextTheme.ERROR}
              text  = {validateErrorTranslate[err]}
            />
          ))
        }
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
