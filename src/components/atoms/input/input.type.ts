import type React from 'react';
import type { InputHTMLAttributes } from 'react';
import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor, ThemeSize } from '@PUI/core';
import type { DeepOptional } from '@PUI/core/helpers';

type InputVariant = 'outline' | 'filled' | 'standard';

export interface PxComponentInput {
   defaultProps: {
      /**
       * Kiểu hiển thị của nút: 'contained' | 'outlined' | 'text'
       */
      variant: InputVariant;

      /**
       * Màu sắc của nút: 'primary' | 'secondary' | 'danger' | 'success' | ...
       */
      color: ThemeColor;

      /**
       * Kích thước của nút: 'sm' | 'md' | 'lg'
       */
      size: ThemeSize;

      /**
       * Icon hiển thị ở đầu (bên trái) nội dung nút
       */
      startIcon: React.ReactNode | null;

      /**
       * Icon hiển thị ở cuối (bên phải) nội dung nút
       */
      endIcon: React.ReactNode | null;

      /**
       * Vô hiệu hóa nút, không thể click được
       */
      disabled: boolean;

      /**
       * Nút chiếm toàn bộ chiều rộng của container
       */
      fullWidth: boolean;

      /**
       * Trạng thái loading, hiển thị icon hoặc nội dung đang xử lý
       */
      loading: boolean;

      /**
       * Custom icon loading thay vì mặc định (ví dụ: spinner riêng)
       */
      loadingIndicator: React.ReactNode | null;

      /**
       * Vị trí hiển thị icon loading: 'start' | 'end' | 'center'
       */
      loadingPosition: 'start' | 'end';

      error: boolean;
   };
   styleOverrides: {
      root: CSSObject;
      size: Record<ThemeSize, CSSObject>;
      color: Record<ThemeColor, CSSObject>;
      variant: Record<InputVariant, CSSObject>;
   };
}

export type InputStyledProps = PxComponentInput['defaultProps'] & SxConfigProps;

type InputTextSafeProps = Omit<
   InputHTMLAttributes<HTMLInputElement>,
   | 'accept'
   | 'alt'
   | 'capture'
   | 'checked'
   | 'defaultChecked'
   | 'files'
   | 'formAction'
   | 'formEncType'
   | 'formMethod'
   | 'formNoValidate'
   | 'formTarget'
   | 'height'
   | 'width'
   | 'multiple'
   | 'src'
   | 'step'
   | 'min'
   | 'max'
   | 'size'
   | 'list'
   | 'type'
   | 'color'
> &
   DeepOptional<InputStyledProps> & {
      helperText?: React.ReactNode;
   };

export type InputProps = InputTextSafeProps;
