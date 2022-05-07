import { Fragment, useEffect, useRef, useState } from 'react';

import { SymbolIcon } from '@dynamic-devs/symbol-react';

import { TypeIcon } from '@/types/type-icon';
import { TypeSize } from '@/types/type-size';
import DialogModal from '@elements/molecules/DialogModal';
import { Popover, Transition } from '@headlessui/react';
import useAnalyticsEventTracker from '@/hooks/useAnalytics';
import Button from '@elements/atoms/Button';
import { ICON_SIZE } from '@utils/size';

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

const DialogIconDetail = ({
  icon,
  type,
  onClose
}: Props) => {

  const [auxType, setAuxType] = useState<TypeIcon>(type);
  const [typeSize, setTypeSize] = useState<TypeSize>('xl');
  const [typeImport, setTypeImport] = useState<TypeImport>('React');
  const [svgUrl, setSvgUrl] = useState<string>('#');
  const [pngUrl, setPngUrl] = useState<string>('#');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const gaEventTracker = useAnalyticsEventTracker();
  const containerRef = useRef<HTMLDivElement>(null);


  const updateSVGFile = () => {
    const size = ICON_SIZE[typeSize];
    if (containerRef.current) {
      const svgElement = containerRef.current.children[0];
      svgElement.setAttribute('width', size.toString());
      svgElement.setAttribute('height', size.toString());
      const serializer = new XMLSerializer();
      let source = serializer.serializeToString(svgElement);
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
      const urlSVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
      setSvgUrl(urlSVG);
    }
  }

  const updatePNGFile = () => {
    const size = ICON_SIZE[typeSize];
    if (containerRef.current) {
      const svgElement = containerRef.current.children[0] as any;
      const { x, y } = svgElement.viewBox.baseVal;
      const blob = new Blob([svgElement.outerHTML], {type: 'image/svg+xml'})
      const url = URL.createObjectURL(blob);
      const image = document.createElement('img');
      image.src = url;
      image.addEventListener('load', () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        if (context) {
          context.drawImage(image, x, y, size, size);
          setPngUrl(canvas.toDataURL());
          URL.revokeObjectURL(url);
        }
      })
    }

  }


  const getIconByUrl = (type: 'solid' | 'outline', name: string) => {
    setIsLoading(true);
    const url = `https://symbol.blob.core.windows.net/symbols/icons/${type}/ic_${name}.svg`;
    fetch(url).then((response) => {
      if (response.ok) {
        return response.text().then((svgContent) => {
          const svgNamespace = 'http://www.w3.org/2000/svg';
          if (containerRef.current) {
            containerRef.current.innerHTML = svgContent;
            const svgElement = containerRef.current.children[0];
            svgElement.setAttribute('xmlns', svgNamespace);
            updateSVGFile();
            updatePNGFile();
            setIsLoading(false);
          }
        })
      } else {
        setIsLoading(false);
        return;
      }
    })
  }

  useEffect(() => {
    getIconByUrl(type, icon);
  }, [])

  useEffect(() => {
    updateSVGFile();
    updatePNGFile();
  }, [typeSize])

  useEffect(() => {
    setAuxType(type);
  }, [type])

  useEffect(() => {
    getIconByUrl(auxType, icon);
  }, [auxType])

  return (
    <DialogModal isOpen={!!icon} onClose={onClose} className="flex flex-col p-6">
      <div className='invisible h-0' ref={containerRef}></div>
      <div className='flex justify-start border-b-[1px] border-primary-grey-500 w-full'>
        <h2 className="font-bold text-paragraph-02 md:text-paragraph-01">{icon}</h2>
      </div>
      <div className='flex flex-col md:flex-row my-6 md:my-8 only-sm:gap-y-6 md:gap-x-8'>
        <div className='flex justify-center items-start'>
          <div className="flex justify-center items-center
            w-[104px] h-[104px] md:w-[144px] md:h-[144px] lg:w-[176px] lg:h-[176px]
            text-primary-neutral-200 border-[1px] rounded-lg">
            <SymbolIcon
              name={icon}
              iconClass={`symbol-${typeSize}`}
              type={auxType}
            />
          </div>
        </div>
        <div className='w-full'>
          <h3 className="text-paragraph-03 font-bold mb-2">Type</h3>
          <div className="flex mb-4 gap-x-2 md:gap-x-4">
            <button
              className={`select-button-md lg:select-button-lg w-full md:w-fit
              ${auxType === 'solid' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setAuxType('solid')}
            >
              Solid
            </button>
            <button
              className={`select-button-md lg:select-button-lg w-full md:w-fit
              ${auxType === 'outline' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setAuxType('outline')}
            >
              Outline
            </button>
          </div>
          <h3 className="text-paragraph-03 font-bold mb-2">Size</h3>
          <div className="flex flex-wrap gap-2 md:gap-x-4 md:max-w-[212px] lg:max-w-[288px]">
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === 'sm' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('sm')}
            >
              16px
            </button>
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === 'md' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('md')}
            >
              24px
            </button>
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === 'lg' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('lg')}
            >
              32px
            </button>
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === 'xl' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('xl')}
            >
              40px
            </button>
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === '2xl' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('2xl')}
            >
              64px
            </button>
            <button
              className={`select-button-md lg:select-button-lg flex-auto md:flex-none md:w-[60px] lg:w-[85px]
              ${typeSize === '3xl' ? 'select-blue-solid' : 'select-blue-outline'}`}
              onClick={() => setTypeSize('3xl')}
            >
              96px
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
            <code className="flex flex-wrap cursor-pointer font-inconsolata">
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
      <div className="mt-6 md:mt-8 flex flex-col gap-y-4 md:flex-row md:gap-y-0 md:gap-x-4">
        <Button
          className="btn-md lg:btn-lg btn-primary-solid only-sm:!w-full"
          icon="download" iconClass="symbol-sm"
          url={svgUrl}
          download={`${icon}-${auxType}-${typeSize}.svg`}
          isDisabled={isLoading}
        >
            Download SVG
        </Button>
        <Button
          className="btn-md lg:btn-lg btn-primary-solid only-sm:!w-full"
          icon="download"
          iconClass="symbol-sm"
          url={pngUrl}
          download={`${icon}-${auxType}-${typeSize}.png`}
          isDisabled={isLoading}
        >
            Download PNG
        </Button>
      </div>
    </DialogModal>
  )
}

export default DialogIconDetail;
