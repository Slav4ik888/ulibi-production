import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



export enum ButtonTheme {
  CLEAR          = 'clear',
  CLEAR_INV      = 'clear-inverted',
  SIMPLE         = 'simple',
  BACKGROUND     = 'background',
  BACKGROUND_INV = 'background-inverted'
}

export enum ButtonSize {
  M  = 'size_m',
  L  = 'size_l',
  XL = 'size_xl'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string;
  theme?     : ButtonTheme;
  square?    : boolean;
  size?      : ButtonSize;
}


export const Button: FC<Props> = ({ theme, square, size, className, children, ...props }) => {
  const mods = {
    [s.square]: square
  };

  const additional = [
    s[theme], s[size], className
  ]

  return (
    <button
      type      = 'button'
      className = {cn(s.root, mods, additional)}
      {...props}
    >
      {children}
    </button>
  );
};


Button.defaultProps = {
  className : '',
  theme     : ButtonTheme.CLEAR,
  square    : false,
  size      : ButtonSize.M
};
