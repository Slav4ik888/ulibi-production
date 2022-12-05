import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum AppLinkTheme {
  PRIMARY   = 'primary',
  SECONDARY = 'secondary',
  RED       = 'red'
}

interface Props extends LinkProps {
  className? : string
  theme?     : AppLinkTheme
  children   : ReactNode
}


export const AppLink = ({ to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps }: Props) => (
  <Link
    to={to}
    className={cn(s.root, {}, [className, s[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
