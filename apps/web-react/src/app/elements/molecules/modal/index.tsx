import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import './styles.scss';

export type ModalProps<T> = {
  isOpen: boolean;
  onClose: () => void | void;
  children: React.ReactNode;
  className?: string;
};

const Modal: FC<ModalProps<unknown>> = (props) => {
  const { isOpen, onClose, children, className } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className={`content-dialog ${className}`}
        as="div"
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="dialog-overlay" />
          <div className="content-body">
            <svg onClick={onClose} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
