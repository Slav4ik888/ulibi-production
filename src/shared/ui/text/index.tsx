import { memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum TextTheme {
  PRIMARY  = 'primary',
  INVERTED = 'inverted',
  ERROR    = 'error'
}

export enum TextAlign {
  RIGHT  = 'right',
  LEFT   = 'left',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_small',
  M = 'size_medium',
  L = 'size_large'
}

interface Props {
  title?     : string
  text?      : string
  className? : string
  theme?     : TextTheme
  align?     : TextAlign
  size?      : TextSize
}


export const Text = memo((props: Props) => {
  const {
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size  = TextSize.M,
    className
  } = props;


  return (
    <div className={cn(s.root, {}, [s[theme], s[align],  s[size], className])}>
      {
        title && <p className={s.title}>{title}</p>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  )
});
