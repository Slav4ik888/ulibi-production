import { ButtonHTMLAttributes, memo } from 'react';
import { cn, Mods } from 'shared/lib';
import s from './index.module.scss';



export enum ButtonTheme {
  CLEAR           = 'clear',
  CLEAR_INV       = 'clear-inverted',
  CLEAR_SEC       = 'clear-sec',
  CLEAR_SEC_INV   = 'clear-sec-inv',
  SIMPLE          = 'simple',
  SIMPLE_RED      = 'simple-red',
  BACKGROUND      = 'background',
  BACKGROUND_INV  = 'background-inverted'
}

export enum ButtonSize {
  M  = 'size_m',
  L  = 'size_l',
  XL = 'size_xl'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?     : string
  theme?         : ButtonTheme
  square?        : boolean
  size?          : ButtonSize
  disabled?      : boolean
  notHoverColor? : boolean
}


export const Button = memo((props: Props) => {
  const
    {
      theme    = ButtonTheme.CLEAR,
      square   = false,
      size     = ButtonSize.M,
      disabled = false,
      notHoverColor, className, children, ...rest
    } = props,

    mods: Mods = {
      [s.square]   : square,
      [s.disabled] : disabled,
      [s.hover]    : !notHoverColor
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
