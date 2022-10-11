import { BugButton } from 'app/providers/error-boundary';
import { FC, useReducer } from 'react';
import { cn } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switsher';
import s from './index.module.scss';



interface Props {
  className?: string;
}


export const SideBar: FC<Props> = ({ className }) => {
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
        theme       = {ThemeButton.BACKGROUND_INV}
        onClick     = {toggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={s.switcher}>
        <BugButton />
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  )
};

SideBar.defaultProps = {
  className: ''
};
