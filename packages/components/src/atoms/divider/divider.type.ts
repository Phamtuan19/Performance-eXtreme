import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';

export interface DividerSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentDivider = {
   defaultProps: {
      /**
       * Orientation của divider
       */
      orientation: 'horizontal' | 'vertical';

      /**
       * Variant của divider
       */
      variant: 'fullWidth' | 'inset' | 'middle';

      /**
       * Có text content hay không
       */
      textAlign: 'left' | 'center' | 'right';
   };

   styleOverrides: {
      root: CSSObject;
      content: CSSObject;
   };
};

export type DividerStyledProps = PXComponentDivider['defaultProps'] & DividerSxConfigProps;

export type DividerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
   DeepOptional<DividerStyledProps> & {
      /**
       * Text content hiển thị trên divider
       */
      children?: React.ReactNode;
   };
