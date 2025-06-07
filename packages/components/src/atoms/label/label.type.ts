import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface LabelSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentLabel = {
   defaultProps: {
      /**
       * Màu sắc label
       */
      color: ThemeColor | 'default';

      /**
       * Kích thước label
       */
      size: ThemeSize;

      /**
       * Required indicator
       */
      required: boolean;

      /**
       * Disabled state
       */
      disabled: boolean;
   };

   styleOverrides: {
      root: CSSObject;
      required: CSSObject;
   };
};

export type LabelStyledProps = PXComponentLabel['defaultProps'] & LabelSxConfigProps;

export type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'> & DeepOptional<LabelStyledProps>;
