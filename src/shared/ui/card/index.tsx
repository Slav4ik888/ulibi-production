import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props extends HTMLAttributes<HTMLDivElement> {
  children   : ReactNode
  className? : string
}


export const Card: FC<Props> = ({ className, children, ...otherProps }) => (
  <div
    className={cn(s.root, {}, [className])}
    {...otherProps}
  >
    {
      children
    }
  </div>
);
