import { BugButton } from 'app/providers/error-boundary';
import { FC, memo, useMemo, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { selectSideBarItems } from '../../model/selectors';
import { SideBarItemType } from '../../model/types';
import { ThemeSwitcher } from 'widgets/theme-switsher';
import { SideBarItem } from '../side-bar-item';
import s from './index.module.scss';
import { VStack } from 'shared/ui/stack/v-stack';



interface Props {
  className?: string;
}


export const SideBar = memo(({ className }: Props) => {
  const
    [collapsed, toggle] = useReducer(flag => !flag, false),
    sideBarItemsList: SideBarItemType[] = useSelector(selectSideBarItems);

  const itemsList = useMemo(() => sideBarItemsList.map((item) => (
    <SideBarItem
      key       = {item.path}
      item      = {item}
      collapsed = {collapsed}
    />
  )), [collapsed, sideBarItemsList]);


  return (
    <aside
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
        notHoverColor
        onClick     = {toggle}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <VStack role='navigation' gap='8' className={s.items}>
        {itemsList}
      </VStack>

      <div className={s.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
        <BugButton    className={s.lang} short={collapsed} />
      </div>
    </aside>
  )
});
