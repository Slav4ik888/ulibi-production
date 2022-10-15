import { FC, useReducer, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonTheme } from 'shared/ui';
import { Modal } from 'shared/ui/modal';
import s from './index.module.scss';


interface Props {
  classNames?: string;
}


export const Navbar: FC<Props> = ({ classNames }) => {
  const
    { t }            = useTranslation(),
    [isOpen, toggle] = useReducer(s => !s, false);
    // handlerToggle    = useCallback(() => toggle(), []);


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

      <Button
        theme={ButtonTheme.CLEAR_INV}
        onClick={toggle}
      >
        {t('Войти')}
      </Button>

      <Modal
        isOpen   = {isOpen}
        // eslint-disable-next-line max-len, i18next/no-literal-string
        children = {<div style={{ width: '400px', height: '100px' }}>themadsasdasda sdase themadsasdasda sdase</div>}
        onClose  = {toggle}
      />
    </div>
  )
};

Navbar.defaultProps = {
  classNames: ''
}
