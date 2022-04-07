import { useCallback } from 'react';
import { SymbolIcon } from "@dynamic-devs/symbol-react";

import { debounce } from '../../../utils/debounce';


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
    <div className="flex items-center w-full h-12 px-4 py-2 border-2 rounded-4xl border-primary-neutral-200">
      <SymbolIcon
        name="search"
        iconClass="symbol-md"
        className="mr-2"
      />
      <input 
        type="text" 
        placeholder="Search"
        className="w-full outline-none text-paragraph-03 placeholder:text-primary-grey-400"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search;
