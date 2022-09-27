import { FC, useReducer } from 'react';
import { cn } from 'shared/lib';
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
      className={cn(s.root, { [s.collapsed]: collapsed }, [className])}
    >
      <button type='button' onClick={toggle}>{collapsed ? '>' : '<'}</button>
      <div className={s.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  )
};

SideBar.defaultProps = {
  className: ''
}
