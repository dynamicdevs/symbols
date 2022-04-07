import { useState, useCallback, useRef, useEffect } from 'react';

import useResize from '../useResize';

const screens = {
  md: '768px', // { min: 768, max: 1023 }
  lg: '1024px', // { min: 1024, max: 1799 }
  xl: '1800px', // { min: 1800 }
};

type BreakPoint = keyof typeof screens;

const useBreakpoint = (breakpoint: BreakPoint) => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  const checkSize = useCallback(() => {
    const matchMediaResponse = window.matchMedia(
      `(min-width: ${screens[breakpoint]})`
    );

    setIsMatch(matchMediaResponse.matches);
  }, [breakpoint]);

  const checkSizeRef = useRef(checkSize);
  checkSizeRef.current = checkSize;

  useEffect(() => {
    checkSizeRef.current();
  }, []);

  useResize(checkSizeRef.current);

  return isMatch;
};

export default useBreakpoint;
