import { RoutePath } from 'app/providers/router/config';
import { isUserAdmin, isUserManager, selectUserAuthData, userActions } from 'entities/user';
import { LoginModal } from 'features/auth-by-username';
import { loginActions } from 'features/auth-by-username/model';
import { memo, useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme, Avatar, Button, ButtonTheme, Text, TextSize, TextTheme } from 'shared/ui';
import { DropdownMenu } from 'shared/ui/dropdown';
import s from './index.module.scss';



interface Props {
  classNames?: string;
}


export const Navbar = memo(({ classNames }: Props) => {
  const { t }            = useTranslation();
  const [isOpen, toggle] = useReducer(s => !s, false);
  const authData         = useSelector(selectUserAuthData);
  const dispatch         = useDispatch();
  const isAdmin          = useSelector(isUserAdmin);
  console.log('isAdmin: ', isAdmin);
  const isManager        = useSelector(isUserManager);
  console.log('isManager: ', isManager);
  const isAdminPanelAvailable = isAdmin || isManager;
  console.log('isAdminPanelAvailable: ', isAdminPanelAvailable);


  const handlerLogout    = useCallback(() => {
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
            <DropdownMenu
              direction = 'bottom left'
              trigger={<Avatar size={30} src={authData?.avatar || ''} />}
              items={[
                {
                  content : t('Профиль'),
                  href    : `${RoutePath.PROFILE}/${authData.id}`,
                },
                ...(isAdminPanelAvailable
                  ? [{
                      content : t('Админ панель'),
                      href    : RoutePath.ADMIN_PANEL,
                    }]
                  : []
                ),
                {
                  content : t('Выйти'),
                  onClick : handlerLogout
                },
              ]}
              className = {s.dropdown}
            />
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
