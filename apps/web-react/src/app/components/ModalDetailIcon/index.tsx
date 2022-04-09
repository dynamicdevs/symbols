import { useState } from 'react';

import { SymbolIcon } from '@dynamic-devs/symbol-react';

import { TypeIcon } from '../../types/type-icon';
import { TypeSize } from '../../types/type-size';
import Modal from '../../elements/molecules/modal';

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

  return (
    <Modal isOpen={!!icon} onClose={onClose} className="flex flex-col items-center p-8">
      <h2 className="font-bold text-subheading-03">{icon}</h2>
      <SymbolIcon
        name={icon}
        iconClass="icon-xl"
        type={auxType}
        className="my-6"
      />
      <div className="flex w-full mb-4">
        <button
          className={`button-sm md:button-md ${auxType === 'solid' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setAuxType('solid')}
        >
          Solid
        </button>
        <button
          className={`button-sm ml-4 md:button-md ${auxType === 'outline' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setAuxType('outline')}
        >
          Outline
        </button>
      </div>
      <div className="flex w-full mb-6">
        <button
          className={`button-sm md:button-md ${typeSize === 'sm' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setTypeSize('sm')}
        >
          sm
        </button>
        <button
          className={`button-sm ml-4 md:button-md ${typeSize === 'md' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setTypeSize('md')}
        >
          md
        </button>
        <button
          className={`button-sm ml-4 md:button-md ${typeSize === 'lg' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setTypeSize('lg')}
        >
          lg
        </button>
        <button
          className={`button-sm ml-4 md:button-md ${typeSize === 'xl' ? 'button-blue-solid' : 'button-blue-outline'}`}
          onClick={() => setTypeSize('xl')}
        >
          xl
        </button>
      </div>
      <div className="relative p-4 rounded-lg w-60 bg-secondary-blue-500">
        <ul className="flex">
          <li
            className={`text-button-05 cursor-pointer ${typeImport === 'React' ? 'text-primary-grey-600 font-extrabold' : 'text-primary-neutral-300'}`}
            onClick={() => setTypeImport('React')}
          >
            React/Angular
          </li>
          <li
            className={`text-button-05 cursor-pointer ml-4 ${typeImport === 'HTML' ? 'text-primary-grey-600 font-extrabold' : 'text-primary-neutral-300'}`}
            onClick={() => setTypeImport('HTML')}
          >
            HTML
          </li>
        </ul>
        <SymbolIcon
          name="copy"
          iconClass="icon-sm text-primary-grey-600"
          type={type}
          className="absolute cursor-pointer top-4 right-4"
          onClick={() => {
            navigator.clipboard.writeText(
              typeImport === 'HTML'
               ? `<symbol-Icon name="${icon}" icon-class="symbol-${typeSize}" type="${auxType}"><symbol-icon/>`
               : `<SymbolIcon name="${icon}" iconClass="symbol-${typeSize}"type="${auxType}" />`
            );
          }}
        />
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
      {/* <div className="modal">
        <div className="modal-header">
          <h2>{icon}</h2>
          <div></div>
        </div>

        <div className="modal-body">
          <div className="content-icon">
            <SymbolIcon
              name={icon}
              iconClass="symbol-xl"
              type={type}
              class="icon"
            />
          </div>

          <div className="content-code">
            <ul>
              <li
                onClick={() => setTypeImport('HTML')}
                className={typeImport === 'HTML' ? 'selected' : ''}
              >
                HTML
              </li>
              <li
                onClick={() => setTypeImport('React')}
                className={typeImport === 'React' ? 'selected' : ''}
              >
                React/Angular
              </li>
            </ul>
            <div className="code-snippet">
              <div className="code-snippet-block">
                <pre>
                  <code>
                    {typeImport === 'HTML' && (
                      <>
                        <span className="token">
                          <span className="punctuation">{'<'}</span>
                          i&nbsp;
                          <span className="attr-name">class</span>
                          <span className="attr-value">
                            <span className="punctuation">=</span>
                            <span className="punctuation">"</span>
                            {icon}
                            <span className="punctuation">"</span>
                          </span>
                          <span className="punctuation">{'>'}</span>
                        </span>
                        <span className="token">
                          <span className="punctuation">{'</'}</span>
                          i
                          <span className="punctuation">{'>'}</span>
                        </span>
                      </>
                    )}

                    {typeImport === 'React' && (
                      <span className="token">
                        <span className="punctuation">{'<'}</span>
                        SymbolIcon&nbsp;
                        <span className="attr-name">name</span>
                        <span className="attr-value">
                          <span className="punctuation">=</span>
                          <span className="punctuation">"</span>
                          {icon}
                          <span className="punctuation">"</span>
                        </span>
                        {type && (
                          <>
                            &nbsp;
                            <span className="attr-name">type</span>
                            <span className="attr-value">
                              <span className="punctuation">=</span>
                              <span className="punctuation">"</span>
                              {type}
                              <span className="punctuation">"</span>
                            </span>
                          </>
                        )}
                        &nbsp;
                        <span className="punctuation">{'/>'}</span>
                      </span>
                    )}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Modal>
  )
}

export default ModalDetailIcon;
