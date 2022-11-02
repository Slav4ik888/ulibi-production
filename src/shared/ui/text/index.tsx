import { memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';


export enum TextTheme {
  PRIMARY = 'primary',
  ERROR   = 'error'
}

interface Props {
  title?     : string
  text?      : string
  className? : string
  theme?     : TextTheme
}


export const Text = memo((props: Props) => {
  const {
    title,
    text,
    theme = TextTheme.PRIMARY,
    className
  } = props;


  return (
    <div className={cn(s.root, {}, [s[theme], className])}>
      {
        title && <p className={s.title}>{title}</p>
      }
      {
        text && <p className={s.text}>{text}</p>
      }
    </div>
  )
});
