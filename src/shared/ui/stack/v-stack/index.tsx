import { FC } from 'react';
import { Flex, FlexProps } from '../flex';
import s from './index.module.scss';



type Props = Omit<FlexProps, 'direction'> // Omit позволяет исключить 'direction'


export const VStack: FC<Props> = (props: Props) => {
  const { align = 'start' } = props;

  return (
    <Flex
      {...props}
      direction = 'column'
      align     = {align}
    />
  )
};
