import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface RadioSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentRadio = {
   defaultProps: {
      /**
       * Màu sắc radio
       */
      color: ThemeColor;

      /**
       * Kích thước radio
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
      radio: CSSObject;
      label: CSSObject;
      dot: CSSObject;
   };
};

export type RadioStyledProps = PXComponentRadio['defaultProps'] & RadioSxConfigProps;

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'type'> &
   DeepOptional<RadioStyledProps> & {
      /**
       * Label text
       */
      label?: React.ReactNode;
   };

export type RadioGroupProps = {
   children: React.ReactElement<RadioProps>[];
   value?: string;
   defaultValue?: string;
   onChange?: (value: string) => void;
   name?: string;
   className?: string;
};
