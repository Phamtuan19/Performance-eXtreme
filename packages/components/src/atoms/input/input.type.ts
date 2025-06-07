import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize, ThemeVariant } from '@pui/theme';

// Simplified SxConfigProps for Input
export interface InputSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PxComponentInput = {
   defaultProps: {
      /**
       * Kiểu hiển thị: 'outline' | 'filled' | 'standard'
       */
      variant: 'outline' | 'filled' | 'standard';

      /**
       * Màu sắc theme
       */
      color: ThemeColor;

      /**
       * Kích thước
       */
      size: ThemeSize;

      /**
       * Icon bên trái
       */
      startIcon: React.ReactNode | null;

      /**
       * Icon bên phải
       */
      endIcon: React.ReactNode | null;

      /**
       * Vô hiệu hóa
       */
      disabled: boolean;

      /**
       * Chiếm toàn bộ chiều rộng
       */
      fullWidth: boolean;

      /**
       * Trạng thái loading
       */
      loading: boolean;

      /**
       * Icon loading custom
       */
      loadingIndicator: React.ReactNode;

      /**
       * Vị trí loading icon
       */
      loadingPosition: 'start' | 'end';

      /**
       * Có lỗi hay không
       */
      error: boolean;
   };

   styleOverrides: {
      root: CSSObject;
      wrapper: CSSObject;
      input: CSSObject;
      helperText: CSSObject;
   };
};

export type InputStyledProps = PxComponentInput['defaultProps'] & InputSxConfigProps;

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'> &
   DeepOptional<InputStyledProps> & {
      /**
       * Helper text hiển thị bên dưới input
       */
      helperText?: string;
   };
