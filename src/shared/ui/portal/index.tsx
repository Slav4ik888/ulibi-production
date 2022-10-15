import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';



interface Props {
  children : ReactNode
  element? : HTMLElement
}


export const Portal: FC<Props> = ({ children, element }) => createPortal(children, element);

Portal.defaultProps = {
  element: document.body
}
