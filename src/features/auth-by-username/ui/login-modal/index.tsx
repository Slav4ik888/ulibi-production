import { FC, Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../login-form/index.async';



interface Props {
  isOpen     : boolean
  onClose    : () => void
}


export const LoginModal: FC<Props> = ({ isOpen, onClose }) => (
  <Modal
    lazy
    isOpen  = {isOpen}
    onClose = {onClose}
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
