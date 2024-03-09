import { memo, ReactNode, useCallback } from 'react';
import { cn } from 'shared/lib';
import { Card, CardTheme } from '../card';
import s from './index.module.scss';


export interface TabItem<T extends string> {
  value   : T
  content : ReactNode
}

interface Styles {
  root?  : string
}


interface Props<T extends string> {
  tabs       : TabItem<T>[]
  value      : string
  styles?    : Styles
  onTabClick : (tab: TabItem<T>) => void
}


export const Tabs = <T extends string>({ tabs, value, onTabClick, styles = {} }: Props<T>) => {
  const handlerClick = useCallback((tab: TabItem<T>) => () => onTabClick(tab), [onTabClick]);


  return (
    <div className={cn(s.root, {}, [styles.root])}>
      {
        tabs.map(tab => (
          <Card
            key       = {tab.value}
            theme     = {tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            className = {s.tab}
            onClick   = {handlerClick(tab)}
          >
            {tab.content}
          </Card>
        ))
      }
    </div>
  )
};
