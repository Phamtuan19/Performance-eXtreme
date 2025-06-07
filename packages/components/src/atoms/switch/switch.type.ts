import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface SwitchSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentSwitch = {
   defaultProps: {
      /**
       * Màu sắc theme
       */
      color: ThemeColor;

      /**
       * Kích thước
       */
      size: ThemeSize;

      /**
       * Vô hiệu hóa
       */
      disabled: boolean;

      /**
       * Checked mặc định
       */
      checked: boolean;
   };

   styleOverrides: {
      root: CSSObject;
      track: CSSObject;
      thumb: CSSObject;
   };
};

export type SwitchStyledProps = PXComponentSwitch['defaultProps'] & SwitchSxConfigProps;

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'type'> &
   DeepOptional<SwitchStyledProps>;
