import { memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  ERROR   = 'error'
}

export enum TextAlign {
  RIGHT  = 'right',
  LEFT   = 'left',
  CENTER = 'center'
}

interface Props {
  title?     : string
  text?      : string
  className? : string
  theme?     : TextTheme
  align?     : TextAlign
}


export const Text = memo((props: Props) => {
  const {
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    className
  } = props;


  return (
    <div className={cn(s.root, {}, [s[theme], s[align], className])}>
      {
        title && <p className={s.title}>{title}</p>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  )
});
