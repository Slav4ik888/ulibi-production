import { FC } from 'react';
import { cn } from 'shared/lib';
import { Loader } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const PageLoader: FC<Props> = ({ className }) => (
  <div className={cn(s.root, {}, [className])}>
    <Loader />
  </div>
);

PageLoader.defaultProps = {
  className: ''
}
