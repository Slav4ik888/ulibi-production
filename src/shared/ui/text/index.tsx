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

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
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

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={cn(s.root, {}, [s[theme], s[align],  s[size], className])}>
      {
        title && <HeaderTag className={s.title}>{title}</HeaderTag>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  )
});
