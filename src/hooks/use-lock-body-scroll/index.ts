import { useLayoutEffect } from 'react';

const useLockBodyScroll = (lock: boolean) => {
   useLayoutEffect(() => {
      if (!lock) return;

      const scrollY = window.scrollY;
      const originalStyle = {
         position: document.body.style.position,
         top: document.body.style.top,
         overflow: document.body.style.overflow,
         width: document.body.style.width,
      };

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';

      return () => {
         document.body.style.position = originalStyle.position;
         document.body.style.top = originalStyle.top;
         document.body.style.overflow = originalStyle.overflow;
         document.body.style.width = originalStyle.width;
         window.scrollTo(0, scrollY);
      };
   }, [lock]);
};

export default useLockBodyScroll;
