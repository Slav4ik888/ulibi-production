import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { selectLoginState, loginActions, loginByUsername } from '../../model';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { Button, ButtonTheme, Text, TextTheme } from 'shared/ui';
import { Input } from 'shared/ui/input';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const LoginForm = memo(({ className }: Props) => {
  const
    { t } = useTranslation(),
    dispatch = useDispatch(),
    { username, password, loading, error } = useSelector(selectLoginState);
  console.log('username, password: ', username, password);

  const handlerChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlerChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handlerSubmit = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);


  return (
    <div className={cn(s.root, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {
        error && <Text
          text  = {t('Ввели не верный логин или пароль')}
          theme = {TextTheme.ERROR}
        />
      }

      <Input
        autofocus
        className = {s.input}
        label     = {t('Введите username')}
        value     = {username}
        onChange  = {handlerChangeUsername}
      />
      <Input
        className = {s.input}
        label     = {t('Введите пароль')}
        value     = {password}
        onChange  = {handlerChangePassword}
      />
      <Button
        className = {s.btn}
        theme     = {ButtonTheme.SIMPLE}
        disabled  = {loading}
        onClick   = {handlerSubmit}
      >
        {t('Войти')}
      </Button>
    </div>
  )
});
