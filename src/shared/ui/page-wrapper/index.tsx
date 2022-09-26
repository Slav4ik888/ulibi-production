import { FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className?: string;
}


export const PageWrapper: FC<Props> = ({ className, children }) => (
  <div className={cn(s.root, {}, [className])}>
    {
      children
    }
  </div>
);


PageWrapper.defaultProps = {
  className: ''
};
