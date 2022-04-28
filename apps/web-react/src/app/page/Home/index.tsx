import { useState, useEffect } from 'react';


import Icon from '../../elements/atoms/Icon';
import Search from '../../elements/molecules/Search';
import GridWrapper from '../../elements/organisms/GridWrapper';
import ModalDetailIcon from '../../components/ModalDetailIcon';

import { IconNames, IconsDictionary } from '../../dictionary/icons-dictionary';
import { cleanText } from '../../utils/clean-text';
import { TypeIcon } from '../../types/type-icon';
import useAnalyticsEventTracker from '../../hooks/useAnalytics';

export const Home = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const [iconSelected, setIconSelected] = useState<string>('');
  const [type, setType] = useState<TypeIcon>('solid');
  const gaEventTracker = useAnalyticsEventTracker();

  useEffect(() => {
    handleChangeSearch('');
  }, []);

  const handleChangeSearch = (value: string) => {
    const keys = Object.keys(IconsDictionary);
    const res = keys.filter(_ => Object.values(IconsDictionary[_ as IconNames])
      .some(v => v.some(m => cleanText(m).indexOf(cleanText(value)) > -1))
    );
    setIcons(res);
  }

  return (
    <>
      <GridWrapper className="bg-primary-grey-600">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 py-6 mx-auto w-full md:pt-14 md:px-5 lg:w-[648px] lg:px-0 lg:pb-8 xl:w-[824px]">
          <Search onChange={handleChangeSearch} />
          <div className="flex justify-center pt-6 md:pt-8">
            <button
              onClick={() => setType('solid')}
              className={`py-2 relative border-none bg-none ${type === 'solid' && 'before:bg-primary-dynamic-900 before:absolute before:h-[2px] before:w-full before:bottom-0'}`}
            >
              <span className={`text-button-04 ${type === 'solid' ? 'font-bold' : 'text-primary-neutral-300 hover:text-primary-neutral-400'}`}>Solid</span>
            </button>
            <button
              onClick={() => setType('outline')}
              className={`py-2 relative border-none bg-none ml-6 ${type === 'outline' && 'before:bg-primary-dynamic-900 before:absolute before:h-[2px] before:w-full before:bottom-0'}`}
            >
              <span className={`text-button-04 ${type === 'outline' ? 'font-bold' : 'text-primary-neutral-300 hover:text-primary-neutral-400'}`}>Outline</span>
            </button>
          </div>
        </div>
      </GridWrapper>

      <GridWrapper className="py-8 min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-392px)] lg:min-h-[calc(100vh-432px)]">
        <div className="grid grid-cols-4 col-span-4 gap-x-4 gap-y-8 md:col-span-8 md:grid-cols-8 lg:col-start-3 lg:gap-x-6 xl:gap-x-8">
          {icons.map((_) => (
            <Icon 
              key={_} 
              title={_} 
              type={type} 
              onClick={() => {
                setIconSelected(_);
                gaEventTracker('Click', 'Detalle icono');
              }}
            />
          ))}
        </div>
      </GridWrapper>
      { iconSelected &&       
        <ModalDetailIcon icon={iconSelected} type={type} onClose={() => setIconSelected('')} />
      }
    </>
  );
}

export default Home;
