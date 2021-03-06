import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SymbolIcon } from '@dynamic-devs/symbol-react';

export type ModalProps<T> = {
  isOpen: boolean;
  onClose: () => void | void;
  children: React.ReactNode;
  className?: string;
};

const DialogModal: FC<ModalProps<unknown>> = (props) => {
  const { isOpen, onClose, children, className } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0 z-50 overflow-y-auto"
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
          <Dialog.Overlay className="fixed z-40 w-screen h-screen bg-transparency-tblack-800" />
          <div className={`bg-primary-grey-600 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 rounded-lg z-50 ${className}`}>
            <SymbolIcon
              name="exit"
              iconClass="icon-md text-primary-neutral-400 hover:text-secondary-blue-300 transition-colors"
              className="absolute cursor-pointer top-6 right-6"
              onClick={onClose}
            />
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default DialogModal;
