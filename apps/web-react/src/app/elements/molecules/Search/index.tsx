import { useCallback, useRef, useState, MutableRefObject } from 'react';
import { SymbolIcon } from "@dynamic-devs/symbol-react";

import { debounce } from '../../../utils/debounce';

interface Props {
  onChange: (e: string) => void;
}

export const Search = ({ onChange }: Props) => {
  const [text, setText] = useState<string>('');
  
  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce((value: string) => {
      onChange(value);
      setText(value);
    }, 250),
    []
  );

  return (
    <div className="flex relative items-center w-full h-12 border-2 rounded-4xl border-primary-neutral-200 focus-within:border-[3px] focus-within:border-secondary-blue-300 group focus-within:hover:border-secondary-blue-300 hover:border-primary-neutral-300 md:h-16">
      <SymbolIcon
        name="search"
        iconClass="text-primary-neutral-200 group-focus-within:text-secondary-blue-300 group-focus-within:group-hover:text-secondary-blue-300 group-hover:text-primary-neutral-300 icon-md md:icon-lg"
        className="absolute left-4 md:left-6"
      />
      <input
        ref={ref}
        type="text"
        placeholder="Search"
        className="w-full h-full px-12 font-semibold outline-none rounded-4xl text-paragraph-03 placeholder:text-primary-grey-400 md:px-18"
        onChange={(e) => handleChange(e.target.value)}
      />
      <SymbolIcon
        name="negative"
        iconClass="text-primary-neutral-200 group-focus-within:text-secondary-blue-300 group-focus-within:group-hover:text-secondary-blue-300 group-hover:text-primary-neutral-300 icon-md md:icon-lg"
        className={`absolute cursor-pointer right-4 md:right-6 ${text ? 'opacity-1' : 'opacity-0'}`}
        onClick={() => {
          handleChange('');
          ref.current.value = '';
        }}
      />
    </div>
  )
}

export default Search;
