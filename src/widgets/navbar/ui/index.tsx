import { RoutePath } from 'app/providers/router/config';
import { selectUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/auth-by-username';
import { loginActions } from 'features/auth-by-username/model';
import { memo, useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonTheme, Text, TextSize, TextTheme } from 'shared/ui';
import s from './index.module.scss';


interface Props {
  classNames?: string;
}


export const Navbar = memo(({ classNames }: Props) => {
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
    <header className={cn(s.root, {}, [classNames])}>
      <div className={s.links}>
        <Text
          className = {s.appName}
          title     = {t('Korzan Blog App')}
          size      = {TextSize.S}
          theme     = {TextTheme.INVERTED}
        />
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
          ? (<>
            <AppLink
              to        = {RoutePath.ARTICLE_ADD}
              theme     = {AppLinkTheme.SECONDARY}
              className = {s.appLink}
              children  = {t('Добавить статью')}
            />
            <Button
              theme   = {ButtonTheme.CLEAR_SEC}
              onClick = {handlerLogout}
            >
              {t('Выйти')}
            </Button>
            </>)
          : (<>
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
          </>)
      }
    </header>
  )
});
