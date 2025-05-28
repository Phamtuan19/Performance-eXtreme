import React from 'react';

import type { SxProps, Theme, TypeInputColor, TypeInputSize, TypeInputVariant } from '@PUI/core';
import { UnstableSxConfigProps } from '@PUI/core/styled';

export interface InputStyledProps {
   sx?: SxProps<Theme>;

   /**
    * Kiểu hiển thị của nút: 'contained' | 'outlined' | 'text'
    */
   variant?: TypeInputVariant;

   /**
    * Màu sắc của nút: 'primary' | 'secondary' | 'danger' | 'success' | ...
    */
   color?: TypeInputColor;

   /**
    * Kích thước của nút: 'sm' | 'md' | 'lg'
    */
   size?: TypeInputSize;

   /**
    * Nút chiếm toàn bộ chiều rộng của container
    */
   fullWidth?: boolean;

   disabled?: boolean;

   /**
    * Icon hiển thị ở đầu (bên trái) nội dung nút
    */
   startIcon?: React.ReactNode | null;

   /**
    * Icon hiển thị ở cuối (bên phải) nội dung nút
    */
   endIcon?: React.ReactNode | null;
}

export interface InputProps
   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'height' | 'width'>,
      Omit<UnstableSxConfigProps, 'color'>,
      InputStyledProps {
   /**
    * Trạng thái loading, hiển thị icon hoặc nội dung đang xử lý
    */
   loading?: boolean;

   /**
    * Custom icon loading thay vì mặc định (ví dụ: spinner riêng)
    */
   loadingIndicator?: React.ReactNode | null;

   /**
    * Vị trí hiển thị icon loading: 'start' | 'end' | 'center'
    */
   loadingPosition?: 'start' | 'end';

   error?: boolean;

   helperText?: React.ReactNode;
}
