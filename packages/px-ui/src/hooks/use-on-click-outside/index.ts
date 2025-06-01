import { useCallback, useEffect } from 'react';

const useOnClickOutside = <T extends Element>(
   ref: React.RefObject<T | null>,
   callback: () => void,
   additionalRefs: React.RefObject<Element | null>[] = [],
) => {
   const handleClick = useCallback(
      (e: MouseEvent) => {
         const isOutside = () => {
            const refs = [ref, ...additionalRefs];
            return refs.every((r) => r.current && !r.current.contains(e.target as Node));
         };

         if (isOutside()) {
            callback();
         }
      },
      [ref, callback, additionalRefs],
   );

   useEffect(() => {
      document.addEventListener('mousedown', handleClick);
      return () => {
         document.removeEventListener('mousedown', handleClick);
      };
   }, [handleClick]);
};

export default useOnClickOutside;
