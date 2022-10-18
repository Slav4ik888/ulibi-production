import { FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from '../login-form';



interface Props {
  isOpen     : boolean
  onClose    : () => void
}


export const LoginModal: FC<Props> = ({ isOpen, onClose }) => (
  <Modal
    lazy
    isOpen    = {isOpen}
    children  = {<LoginForm />}
    onClose   = {onClose}
  />
);
