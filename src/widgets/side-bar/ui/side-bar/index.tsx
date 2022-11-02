import { BugButton } from 'app/providers/error-boundary';
import { FC, memo, useReducer } from 'react';
import { cn } from 'shared/lib';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switsher';
import { sideBarItemsList } from '../../module';
import { SideBarItem } from '../side-bar-item';
import s from './index.module.scss';



interface Props {
  className?: string;
}


export const SideBar = memo(({ className }: Props) => {
  const [collapsed, toggle] = useReducer(flag => !flag, false);

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
        {sideBarItemsList.map(item => <SideBarItem
          key       = {item.label}
          item      = {item}
          collapsed = {collapsed}
        />)}
      </div>

      <div className={s.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
        <BugButton    className={s.lang} short={collapsed} />
      </div>
    </div>
  )
});
