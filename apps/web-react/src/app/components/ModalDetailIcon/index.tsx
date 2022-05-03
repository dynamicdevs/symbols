import { Fragment, useEffect, useState } from 'react';

import { SymbolIcon } from '@dynamic-devs/symbol-react';

import { TypeIcon } from '@/types/type-icon';
import { TypeSize } from '@/types/type-size';
import Modal from '@/elements/molecules/Modal';
import { Popover, Transition } from '@headlessui/react';
import useAnalyticsEventTracker from '@/hooks/useAnalytics';

interface AttributeProps {
  attr: string;
  value: string;
}

const Attribute = ({
  attr,
  value,
}: AttributeProps) => {
  return (
    <>
      <span className="text-primary-grey-600">{attr}</span>
      <span className="text-primary-grey-600">=</span>
      <span className="text-primary-grey-600">"</span>
      <span className="text-secondary-aqua-300">{value}</span>
      <span className="text-primary-grey-600">"</span>
    </>
  );
};
interface Props {
  icon: string;
  type: TypeIcon;
  onClose: () => void;
}

type TypeImport = 'HTML' | 'React';

const ModalDetailIcon = ({
  icon,
  type,
  onClose
}: Props) => {

  const [auxType, setAuxType] = useState<TypeIcon>(type);
  const [typeSize, setTypeSize] = useState<TypeSize>('xl');
  const [typeImport, setTypeImport] = useState<TypeImport>('React');

  const gaEventTracker = useAnalyticsEventTracker();

  useEffect(() => {
    setAuxType(type);
  }, [type])

  return (
    <Modal isOpen={!!icon} onClose={onClose} className="flex flex-col p-8 lg:p-10 lg:pt-8">      
      <div className='flex justify-center md:justify-start md:border-b-2 md:border-primary-grey-500 md:border-solid'>
        <h2 className="font-bold text-subheading-03 lg:text-subheading-02">{icon}</h2>
      </div>
      <div className='flex flex-col my-6 md:items-center md:flex-row md:space-x-4 lg:my-8'>
        <div className='flex justify-center w-full mb-6 md:mb-0'>
          <SymbolIcon
            name={icon}
            iconClass={`symbol-${typeSize}`}
            type={auxType}
          />
        </div>
        <div className='w-full'>
          <div className="flex mb-4">
            <button
              className={`button-sm md:button-md lg:button-lg ${auxType === 'solid' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setAuxType('solid')}
            >
              Solid
            </button>
            <button
              className={`button-sm ml-4 md:button-md lg:button-lg ${auxType === 'outline' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setAuxType('outline')}
            >
              Outline
            </button>
          </div>
          <div className="flex">
            <button
              className={`button-sm md:button-md lg:button-lg ${typeSize === 'sm' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setTypeSize('sm')}
            >
              sm
            </button>
            <button
              className={`button-sm ml-4 md:button-md lg:button-lg ${typeSize === 'md' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setTypeSize('md')}
            >
              md
            </button>
            <button
              className={`button-sm ml-4 md:button-md lg:button-lg ${typeSize === 'lg' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setTypeSize('lg')}
            >
              lg
            </button>
            <button
              className={`button-sm ml-4 md:button-md lg:button-lg ${typeSize === 'xl' ? 'button-blue-solid' : 'button-blue-outline'}`}
              onClick={() => setTypeSize('xl')}
            >
              xl
            </button>
          </div>
        </div>
      </div>
      <div className="relative p-4 lg:p-6 lg:pt-8 rounded-lg w-60 md:w-[464px] lg:w-[640px] bg-secondary-blue-500">
        <ul className="flex">
          <li
            className={`text-button-05 lg:text-button-04 cursor-pointer ${typeImport === 'React' ? 'text-primary-grey-600 font-extrabold' : 'text-primary-neutral-300'}`}
            onClick={() => setTypeImport('React')}
          >
            React/Angular
          </li>
          <li
            className={`text-button-05 lg:text-button-04 cursor-pointer ml-4 ${typeImport === 'HTML' ? 'text-primary-grey-600 font-extrabold' : 'text-primary-neutral-300'}`}
            onClick={() => setTypeImport('HTML')}
          >
            HTML
          </li>
        </ul>
        <div className='absolute top-4 md:top-3 lg:top-6 right-4'>
          <Popover className="relative flex items-center justify-center">
            <Popover.Button>
              <SymbolIcon
                name="copy"
                iconClass="icon-sm md:icon-md lg:icon-lg text-primary-grey-600 hover:text-secondary-blue-300"
                className="absolute right-0 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(
                    typeImport === 'HTML'
                    ? `<symbol-Icon name="${icon}" icon-class="symbol-${typeSize}" type="${auxType}"><symbol-icon/>`
                    : `<SymbolIcon name="${icon}" iconClass="symbol-${typeSize}"type="${auxType}" />`
                  );
                  gaEventTracker('Click', 'Copiar icono');
                }}
              />
            </Popover.Button>
            <Transition 
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -translate-x-1/2 -translate-y-full left-1/2 -top-1">
                {({close}) => (
                  <div className="px-2 rounded-lg cursor-pointer bg-primary-neutral-100" onClick={() => close()}>
                      <span className='font-bold text-secondary-blue-500'>Copied!</span>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
        <div className="mt-8">
          <pre>
            <code className="flex flex-wrap cursor-pointer">
              <span className="text-primary-grey-600">{'<'}</span>
              <span className="text-secondary-purple-400">{typeImport === 'HTML' ? 'symbol-icon' : 'SymbolIcon'}&nbsp;</span>
              <Attribute attr="name" value={icon} />
              &nbsp;
              <Attribute attr={typeImport === 'HTML' ? 'icon-class' : 'iconClass'} value={`symbol-${typeSize}`} />
              &nbsp;
              <Attribute attr="type" value={auxType} />
              {typeImport === 'HTML' ? (
                <>
                  <span className="text-primary-grey-600">{'</'}</span>
                  <span className="text-secondary-purple-400">symbol-icon</span>
                  <span className="text-primary-grey-600">{'>'}</span>
                </>
              ) : (
                <>
                  &nbsp;
                  <span className="text-primary-grey-600">{'/>'}</span>
                </>
              )}
            </code>
          </pre>
        </div>
      </div>
    </Modal>
  )
}

export default ModalDetailIcon;
