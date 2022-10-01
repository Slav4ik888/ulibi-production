import { FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className?: string
}


export const Loader: FC<Props> = ({ className }) => (
  <div className={cn(s.spinnerDiv, {}, [className])}>
    <div className={s.spinner}>
      <div>
        <div />
        <div />
        <div />
      </div>
      <div>
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

Loader.defaultProps = {
  className: ''
}
