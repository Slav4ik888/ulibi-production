import { memo, ReactNode } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className? : string;
  children   : ReactNode
}


export const PageWrapper = memo(({ className, children }: Props) => (
  <div className={cn(s.root, {}, [className])}>
    {
      children
    }
  </div>
));
