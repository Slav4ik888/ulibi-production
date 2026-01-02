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
  const
    { t } = useTranslation('profile'),
    { t: b } = useTranslation('buttons'),
    dispatch = useAppDispatch(),
    authData = useSelector(selectUserAuthData),
    profile  = useSelector(selectProfileData),
    canEdit  = authData?.id === profile.id,
    readonly = useSelector(selectProfileReadonly),
    btnTitle = useMemo(() => readonly ? t('Редактировать') : t('Отменить'), [readonly, t]);

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
            theme   = {ButtonTheme.SIMPLE}
            onClick = {handlerClick}
          >
            {btnTitle}
          </Button>
        }
        {
          ! readonly && <Button
            theme   = {ButtonTheme.SIMPLE_RED}
            onClick = {handlerSubmit}
          >
            {b('Сохранить')}
          </Button>
        }
      </HStack>
    </HStack>
  )
});
