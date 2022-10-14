import { BugButton } from 'app/providers/error-boundary';
import { FC, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routes';
import { cn } from 'shared/lib';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switsher';
import ListIcon from 'shared/assets/icons/list.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import s from './index.module.scss';



interface Props {
  className?: string;
}


export const SideBar: FC<Props> = ({ className }) => {
  const
    { t } = useTranslation(),
    [collapsed, toggle] = useReducer(flag => !flag, false);


  return (
    <div
      data-testid = 'sidebar'
      className   = {cn(s.root, { [s.collapsed]: collapsed }, [className])}
    >
      <Button
        type        = 'button'
        data-testid = 'side-bar-toggle'
        className   = {s.collapseBtn}
        theme       = {ButtonTheme.BACKGROUND_INV}
        size        = {ButtonSize. L}
        square
        onClick     = {toggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={s.items}>
        <AppLink
          to        = {RoutePath.MAIN}
          theme     = {AppLinkTheme.SECONDARY}
          className = {s.item}
        >
          <HomeIcon className={s.icon} />
          <span className={s.link}>{t('Главная')}</span>
        </AppLink>

        <AppLink
          to        = {RoutePath.ABOUT}
          theme     = {AppLinkTheme.SECONDARY}
          className = {s.item}
        >
          <ListIcon className={s.icon} />
          <span className={s.link}>{t('О сайте')}</span>
        </AppLink>
      </div>

      <div className={s.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
        <BugButton    className={s.lang} short={collapsed} />
      </div>
    </div>
  )
};

SideBar.defaultProps = {
  className: ''
};
