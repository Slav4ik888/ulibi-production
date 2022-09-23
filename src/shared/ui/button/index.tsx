import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



export enum ThemeButton {
  CLEAR = `clear`,
}


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string;
  theme?     : ThemeButton;
}


export const Button: FC<Props> = ({ theme = ThemeButton.CLEAR, className, children, ...props }) => {
  return (
    <button
      className={cn(s.navbar, {}, [className, s[theme]])}
      {...props}
    >
      {children}
    </button>
  );
};
