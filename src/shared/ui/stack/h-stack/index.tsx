import { FC } from 'react';
import { Flex, FlexProps } from '../flex';


type Props = Omit<FlexProps, 'direction'> // Omit позволяет исключить 'direction'

export const HStack: FC<Props> = (props: Props) => (
  <Flex direction='row' {...props} />
);
