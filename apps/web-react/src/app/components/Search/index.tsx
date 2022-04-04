import { useCallback } from 'react';
import { debounce } from '../../utils/debounce';

import './styles.scss';

interface Props {
  onChange: (e: string) => void;
}

export const Search = ({ onChange }: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((value: string) => {
      onChange(value);
    }, 250),
    []
  );

  return (
    <div className="content-search">
      <input 
        type="text" 
        placeholder="Search icons..." 
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search;
