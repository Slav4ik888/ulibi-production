import { cn } from 'shared/lib/class-names/index';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Profile, ProfileCard } from 'entities/profile';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui';
import {
  selectProfileForm, selectProfileReadonly, selectProfileLoading, selectProfileError, selectProfileValidateErrors
} from '../../model/selectors';
import { profileActions, profileReducer } from '../../model/slice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { fetchProfileData } from '../../model/services';
import { ProfileHeader } from '../header';
import { VStack } from 'shared/ui/stack';



const reducers: ReducersList = {
  profile: profileReducer
};


interface EditableProfileCardProps {
  id?: string | undefined
  className?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch       = useAppDispatch();
  const formData       = useSelector(selectProfileForm);
  const readOnly       = useSelector(selectProfileReadonly);
  const loading        = useSelector(selectProfileLoading);
  const error          = useSelector(selectProfileError);
  const validateErrors = useSelector(selectProfileValidateErrors);


  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id));
  });

  const handlerChange = useCallback((value: string | number, name: string) => dispatch(
    profileActions.updateProfile({ [name]: value } as unknown as Profile)
  ), [dispatch]);

  const validateErrorTranslate = {
    INVALID_DATA      : t('Некорректные данные'),
    INVALID_USER_DATA : t('Некорректное имя или фамилия'),
    INVALID_AGE       : t('Некорректный возраст'),
    INVALID_COUNTRY   : t('Некорректная страна'),
    SERVER_ERROR      : t('Серверная ошибка')
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap='8' fullWidth>
        <ProfileHeader />
        {
          validateErrors?.map(err => (
            <Text
              key         = {err}
              theme       = {TextTheme.ERROR}
              text        = {validateErrorTranslate[err]}
              data-testid = 'EditableProfileCard.Error'
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
      </VStack>
    </DynamicModuleLoader>
  );
});
