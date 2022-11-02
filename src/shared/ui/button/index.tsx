import { ButtonHTMLAttributes, memo } from 'react';
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
  className? : string
  theme?     : ButtonTheme
  square?    : boolean
  size?      : ButtonSize
  disabled?  : boolean
}


export const Button = memo((props: Props) => {
  const
    {
      theme  = ButtonTheme.CLEAR,
      square = false,
      size   = ButtonSize.M,
      className, disabled, children, ...rest
    } = props,

    mods = {
      [s.square]   : square,
      [s.disabled] : disabled
    },
    additional = [
      s[theme], s[size], className
    ];


  return (
    <button
      type      = 'button'
      disabled  = {disabled}
      className = {cn(s.root, mods, additional)}
      {...rest}
    >
      {children}
    </button>
  );
});
