import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum CardTheme {
  NORMAL   = 'normal',
  OUTLINED = 'outlined'
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  children   : ReactNode
  theme?     : CardTheme
  className? : string
}


export const Card: FC<Props> = ({ className, theme = CardTheme.NORMAL, children, ...otherProps }) => (
  <div
    className={cn(s.root, {}, [s[theme], className])}
    {...otherProps}
  >
    {
      children
    }
  </div>
);
