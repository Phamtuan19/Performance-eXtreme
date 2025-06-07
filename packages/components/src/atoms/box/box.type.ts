import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';

// Simplified SxConfigProps for Box
export interface BoxSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentBox = {
   defaultProps: {
      /**
       * HTML tag hoặc component để render
       */
      component: React.ElementType;
   };

   styleOverrides: {
      root: CSSObject;
   };
};

export type BoxStyledProps = PXComponentBox['defaultProps'] &
   BoxSxConfigProps & {
      display?: string;
      flexDirection?: string;
      justifyContent?: string;
      alignItems?: string;
      gap?: number | string;
      p?: number | string;
      padding?: number | string;
      m?: number | string;
      margin?: number | string;
      width?: number | string;
      height?: number | string;
      background?: string;
      backgroundColor?: string;
   };

export type BoxProps = Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'content'> & DeepOptional<BoxStyledProps>;
