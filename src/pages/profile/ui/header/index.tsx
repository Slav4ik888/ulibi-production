import { memo, useCallback, useMemo } from 'react';
import { selectProfileReadonly, updateProfileData } from 'entities/profile';
import { profileActions } from 'entities/profile/model/slice';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button, ButtonTheme, Text, } from 'shared/ui';
import s from './index.module.scss';



export const ProfileHeader = memo(() => {
  const
    { t } = useTranslation('profile'),
    { t: b } = useTranslation('buttons'),
    dispatch = useAppDispatch(),
    readonly = useSelector(selectProfileReadonly),
    btnTitle = useMemo(() => readonly ? t('Редактировать') : t('Отменить'), [readonly, t]);

  const handlerClick = useCallback(() => readonly
      ? dispatch(profileActions.setReadonly(false))
      : dispatch(profileActions.cancelEdit()), [readonly, dispatch]);

  const handlerSubmit = useCallback(() => dispatch(updateProfileData()), [dispatch]);

  return (
    <div className={s.root}>
      <Text title={t('Профиль')} />
      <Button
        className = {s.editBtn}
        theme     = {ButtonTheme.SIMPLE}
        onClick   = {handlerClick}
      >
        {btnTitle}
      </Button>
      {
        !readonly && <Button
          className = {s.submitBtn}
          theme     = {ButtonTheme.SIMPLE_RED}
          onClick   = {handlerSubmit}
        >
          {b('Сохранить')}
        </Button>
      }
    </div>
  )
});
