import { useState, useEffect } from 'react';
import Icon from '../../elements/atoms/Icon';
import ModalDetailIcon from '../../components/ModalDetailIcon';
import Search from '../../elements/molecules/Search';
import { IconNames, IconsDictionary } from '../../dictionary/icons-dictionary';
import GridWrapper from '../../elements/organisms/GridWrapper';
import { cleanText } from '../../utils/clean-text';


import './styles.scss';

type TypeIcon = 'solid' | 'outline' | '';

export const Home = () => {
  const [icons, setIcons] = useState<string[]>([]);
  const [iconSelected, setIconSelected] = useState<string>('');
  const [type, setType] = useState<TypeIcon>('');

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

  const handleChangeType = (value: TypeIcon) => {
    setType(type !== value ? value : '');
  }

  return (
    <>
      <GridWrapper className="bg-primary-grey-600">
        <div className="col-span-4 py-6 md:col-span-8 lg:col-span-12">
          <Search onChange={handleChangeSearch} />
          <div className="flex justify-center pt-6">
            <button 
              onClick={() => handleChangeType('solid')} 
              className={`py-2 relative border-none bg-none ${type === 'solid' && 'before:bg-primary-dynamic-900 before:absolute before:h-[2px] before:w-full before:bottom-0'}`}
            >
              <span className={`text-button-04 ${type === 'solid' ? 'font-bold text-primary-dynamic-900' : 'text-primary-neutral-300'}`}>Solid</span>
            </button>
            <button 
              onClick={() => handleChangeType('outline')} 
              className={`py-2 relative border-none bg-none ml-6 ${type === 'outline' && 'before:bg-primary-dynamic-900 before:absolute before:h-[2px] before:w-full before:bottom-0'}`}
            >
              <span className={`text-button-04 ${type === 'outline' ? 'font-bold text-primary-dynamic-900' : 'text-primary-neutral-300'}`}>Outline</span>
            </button>
          </div>
        </div>
      </GridWrapper>

      <GridWrapper className="py-8">
        <div className="grid grid-cols-4 col-span-4 gap-x-4 gap-y-8">
          {icons.map((_) => (
            <Icon key={_} title={_} type={type} onClick={() => setIconSelected(_)} />
          ))}
        </div>
      </GridWrapper>
    </>
  )
}

export default Home;
