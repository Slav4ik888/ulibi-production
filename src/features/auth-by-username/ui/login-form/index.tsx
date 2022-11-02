import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  loginActions, loginReducer, loginByUsername, selectLoginUsername,
  selectLoginPassword, selectLoginLoading, selectLoginError
} from '../../model';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme, Text, TextTheme } from 'shared/ui';
import { Input } from 'shared/ui/input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { useAppDispatch } from 'shared/lib/hooks';
import { cn } from 'shared/lib';
import s from './index.module.scss';



export interface Props {
  className? : string
  onSuccess  : () => void
}

const initialReducers: ReducersList = {
  login: loginReducer
};


const LoginForm = memo(({ className, onSuccess }: Props) => {
  const
    { t }    = useTranslation(),
    dispatch = useAppDispatch(),
    username = useSelector(selectLoginUsername),
    password = useSelector(selectLoginPassword),
    loading  = useSelector(selectLoginLoading),
    error    = useSelector(selectLoginError);


  const handlerChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handlerChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handlerSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') onSuccess();
  }, [dispatch, username, password, onSuccess]);


  return (
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
});

export default LoginForm
