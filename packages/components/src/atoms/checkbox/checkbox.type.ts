import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface CheckboxSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentCheckbox = {
   defaultProps: {
      /**
       * Màu sắc checkbox
       */
      color: ThemeColor;

      /**
       * Kích thước checkbox
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

      /**
       * Trạng thái indeterminate
       */
      indeterminate: boolean;
   };

   styleOverrides: {
      root: CSSObject;
      checkbox: CSSObject;
      label: CSSObject;
      icon: CSSObject;
   };
};

export type CheckboxStyledProps = PXComponentCheckbox['defaultProps'] & CheckboxSxConfigProps;

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'type'> &
   DeepOptional<CheckboxStyledProps> & {
      /**
       * Label text
       */
      label?: React.ReactNode;
   };
