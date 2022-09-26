import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



export enum ThemeButton {
  CLEAR = 'clear',
}


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string;
  theme?     : ThemeButton;
}


export const Button: FC<Props> = ({ theme, className, children, ...props }) => (
  <button
    type      = 'button'
    className = {cn(s.root, {}, [className, s[theme]])}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className : '',
  theme     : ThemeButton.CLEAR
}
