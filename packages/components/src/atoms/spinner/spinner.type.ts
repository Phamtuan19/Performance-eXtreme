import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface SpinnerSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentSpinner = {
   defaultProps: {
      /**
       * Màu sắc spinner
       */
      color: ThemeColor;

      /**
       * Kích thước spinner
       */
      size: ThemeSize | number;

      /**
       * Độ dày của spinner
       */
      thickness: number;

      /**
       * Variant của spinner
       */
      variant: 'circular' | 'linear';
   };

   styleOverrides: {
      root: CSSObject;
      circular: CSSObject;
      linear: CSSObject;
   };
};

export type SpinnerStyledProps = PXComponentSpinner['defaultProps'] & SpinnerSxConfigProps;

export type SpinnerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> & DeepOptional<SpinnerStyledProps>;
