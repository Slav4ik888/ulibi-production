import { memo, useCallback, useMemo } from 'react';
import { selectProfileData, selectProfileReadonly } from '../../model/selectors';
import { profileActions } from '../../model/slice';
import { updateProfileData } from '../../model/services';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme, Text, } from 'shared/ui';
import { selectUserAuthData } from 'entities/user';
import { HStack } from 'shared/ui/stack';



export const ProfileHeader = memo(() => {
  const { t } = useTranslation('profile');
  const { t: b } = useTranslation('buttons');
  const dispatch = useAppDispatch();
  const authData = useSelector(selectUserAuthData);
  const profile  = useSelector(selectProfileData);
  const canEdit  = authData?.id === profile.id;
  const readonly = useSelector(selectProfileReadonly);


  const handlerClick = useCallback(() => readonly
      ? dispatch(profileActions.setReadonly(false))
      : dispatch(profileActions.cancelEdit()), [readonly, dispatch]);

  const handlerSubmit = useCallback(() => dispatch(updateProfileData()), [dispatch]);


  return (
    <HStack
      fullWidth
      justify='between'
    >
      <Text title={t('Профиль')} />
      <HStack gap='8'>
        {
          canEdit && <Button
            theme       = {ButtonTheme.SIMPLE}
            data-testid = {readonly ? 'ProfileHeader.EditButton' : 'ProfileHeader.CancelButton'}
            onClick     = {handlerClick}
          >
            {readonly ? t('Редактировать') : t('Отменить')}
          </Button>
        }
        {
          ! readonly && <Button
            theme   = {ButtonTheme.SIMPLE_RED}
            data-testid = 'ProfileHeader.SaveButton'
            onClick = {handlerSubmit}
          >
            {b('Сохранить')}
          </Button>
        }
      </HStack>
    </HStack>
  )
});
