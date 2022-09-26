import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum AppLinkTheme {
  PRIMARY   = 'primary',
  SECONDARY = 'secondary'
}

interface Props extends LinkProps {
  className? : string;
  theme?     : AppLinkTheme;
}


export const AppLink: FC<Props> = ({ to, className, theme, children, ...otherProps }) => (
  <Link
    to={to}
    className={cn(s.navbar, {}, [className, s[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);

AppLink.defaultProps = {
  className : '',
  theme     : AppLinkTheme.PRIMARY
}
