import { selectUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/auth-by-username';
import { loginActions } from 'features/auth-by-username/model';
import { FC, useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routes';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonTheme } from 'shared/ui';
import s from './index.module.scss';


interface Props {
  classNames?: string;
}


export const Navbar: FC<Props> = ({ classNames }) => {
  const
    { t }            = useTranslation(),
    [isOpen, toggle] = useReducer(s => !s, false),
    authData         = useSelector(selectUserAuthData),
    dispatch         = useDispatch(),

    handlerLogout    = useCallback(() => {
      dispatch(userActions.logout());
      dispatch(loginActions.clearUsernamePassword());
    }, [dispatch]);


  return (
    <div className={cn(s.root, {}, [classNames])}>
      <div className={s.links}>
        <AppLink
          to        = {RoutePath.MAIN}
          theme     = {AppLinkTheme.SECONDARY}
          children  = {t('Главная')}
          className = {s.mainLink}
        />
        <AppLink
          to        = {RoutePath.ABOUT}
          theme     = {AppLinkTheme.SECONDARY}
          children  = {t('О сайте')}
        />
      </div>

      {
        authData
          ? <Button
              theme   = {ButtonTheme.CLEAR_INV}
              onClick = {handlerLogout}
            >
              {t('Выйти')}
          </Button>
          : <>
            <Button
              theme   = {ButtonTheme.CLEAR_INV}
              onClick = {toggle}
            >
              {t('Войти')}
            </Button>

            <LoginModal
              isOpen  = {isOpen}
              onClose = {toggle}
            />
          </>
      }
    </div>
  )
};
