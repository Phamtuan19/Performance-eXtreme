import type { CSSObject } from 'styled-components';

import type { SxConfigProps } from '@PUI/core';

export type PxComponentBox = {
   styleOverrides?: {
      root?: CSSObject;
   };
};

export type BoxStyledProps = SxConfigProps;

export interface BoxProps
   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'content' | 'translate'>,
      BoxStyledProps {
   /**
    * Nội dung bên trong Box
    */
   children?: React.ReactNode;

   /**
    * Loại thẻ HTML hoặc component custom được render (mặc định là 'div')
    */
   component?: React.ElementType;

   /**
    * Đường dẫn khi sử dụng Box như một thẻ `<a>`
    */
   href?: string;
}
