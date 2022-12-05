import { FC } from 'react';
import { cn } from 'shared/lib';
import s from './index.module.scss';



interface Props {
  className? : string
  Svg        : React.VFC<React.SVGProps<SVGSVGElement>>
}


export const IconWrapper: FC<Props> = ({ className, Svg }) => (
  <Svg className={cn(s.root, {}, [className])} />
);
