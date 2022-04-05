import { useState, useEffect } from 'react';
import Icon from '../../components/Icon';
import ModalDetailIcon from '../../components/ModalDetailIcon';
import Search from '../../components/Search';
import { IconNames, IconsDictionary } from '../../dictionary/icons-dictionary';
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
    <div>
      <div className="content-header">
        <Search onChange={handleChangeSearch}/>

        <div className="content-filters">
          <button 
            onClick={() => handleChangeType('solid')} 
            className={type === 'solid' ? 'selected' : ''}
          >
            Solid
          </button>
          <button 
            onClick={() => handleChangeType('outline')} 
            className={type === 'outline' ? 'selected' : ''}
          >
            Outline
          </button>
        </div>
      </div>

      <div className="list-icons">
        {icons.map((_) => (
          <Icon key={_} title={_} type={type} onClick={() => setIconSelected(_)} />
        ))}
      </div>
      
      <ModalDetailIcon 
        icon={iconSelected} 
        type={type} 
        onClose={() => setIconSelected('')} 
      />
    </div>
  )
}

export default Home;
