import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface TextareaSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentTextarea = {
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
       * Vô hiệu hóa
       */
      disabled: boolean;

      /**
       * Chiếm toàn bộ chiều rộng
       */
      fullWidth: boolean;

      /**
       * Có lỗi hay không
       */
      error: boolean;

      /**
       * Auto resize khi type
       */
      autoResize: boolean;

      /**
       * Số dòng tối thiểu
       */
      minRows: number;

      /**
       * Số dòng tối đa
       */
      maxRows: number;
   };

   styleOverrides: {
      root: CSSObject;
      wrapper: CSSObject;
      textarea: CSSObject;
      helperText: CSSObject;
   };
};

export type TextareaStyledProps = PXComponentTextarea['defaultProps'] & TextareaSxConfigProps;

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color' | 'size'> &
   DeepOptional<TextareaStyledProps> & {
      /**
       * Helper text hiển thị bên dưới textarea
       */
      helperText?: string;
   };
