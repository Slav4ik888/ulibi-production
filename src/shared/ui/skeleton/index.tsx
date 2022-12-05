import { CSSProperties, memo } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  width?        : string | number
  height?       : string | number
  borderRadius? : string
  className?    : string
}


export const Skeleton = memo((props: Props) => {
  const {
    width,
    height,
    borderRadius,
    className
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius
  };


  return (
    <div
      className={cn(s.root, {}, [className])}
      style={style}
    />
  )
});
