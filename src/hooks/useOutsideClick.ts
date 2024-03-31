import { RefObject } from 'preact';
import { useCallback, useEffect } from 'preact/hooks';

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        e.preventDefault();
        // callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick, ref]);
};

export default useOutsideClick;
