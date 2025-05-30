import type React from 'react';
import type { CSSObject } from 'styled-components';

import type { VARIANTS_BUTTON } from './button';

export type PxComponentButton = {
   defaultProps?: {
      /**
       * Kiểu hiển thị của nút: 'contained' | 'outlined' | 'text'
       */
      variant?: (typeof VARIANTS_BUTTON.VARIANT)[number];

      /**
       * Màu sắc của nút: 'primary' | 'secondary' | 'danger' | 'success' | ...
       */
      color?: (typeof VARIANTS_BUTTON.COLOR)[number];

      /**
       * Kích thước của nút: 'sm' | 'md' | 'lg'
       */
      size?: (typeof VARIANTS_BUTTON.SIZE)[number];

      /**
       * Icon hiển thị ở đầu (bên trái) nội dung nút
       */
      startIcon?: React.ReactNode | null;

      /**
       * Icon hiển thị ở cuối (bên phải) nội dung nút
       */
      endIcon?: React.ReactNode | null;

      /**
       * Vô hiệu hóa nút, không thể click được
       */
      disabled?: boolean;

      /**
       * Nút chiếm toàn bộ chiều rộng của container
       */
      fullWidth?: boolean;

      /**
       * Trạng thái loading, hiển thị icon hoặc nội dung đang xử lý
       */
      loading?: boolean;

      /**
       * Vị trí hiển thị icon loading: 'start' | 'end' | 'center'
       */
      loadingPosition?: 'start' | 'end' | 'center';

      /**
       * Custom icon loading thay vì mặc định (ví dụ: spinner riêng)
       */
      loadingIndicator?: React.ReactNode | null;

      /**
       * Custom nội dung hiển thị khi đang loading (thay thế children)
       */
      loadingContent?: React.ReactNode | null;

      /**
       * Tắt hiệu ứng ripple khi click (thường để tăng hiệu suất hoặc đơn giản UI)
       */
      disableRipple?: boolean;
   };
   styleOverrides?: {
      root?: CSSObject;

      // Colors
      colorPrimary?: CSSObject;
      colorSecondary?: CSSObject;
      colorSuccess?: CSSObject;
      colorError?: CSSObject;
      colorWarning?: CSSObject;
      colorInfo?: CSSObject;

      // Sizes
      sizeSmall?: CSSObject;
      sizeMedium?: CSSObject;
      sizeLarge?: CSSObject;

      // Variants
      variantContainer?: CSSObject;
      variantText?: CSSObject;
      variantOutlined?: CSSObject;
      variantTextPrimary?: CSSObject;
      variantTextSecondary?: CSSObject;
      variantTextSuccess?: CSSObject;
      variantTextError?: CSSObject;
      variantTextWarning?: CSSObject;
      variantTextInfo?: CSSObject;
      variantOutlinedPrimary?: CSSObject;
      variantOutlinedSecondary?: CSSObject;
      variantOutlinedSuccess?: CSSObject;
      variantOutlinedError?: CSSObject;
      variantOutlinedWarning?: CSSObject;
      variantOutlinedInfo?: CSSObject;
      variantContainerPrimary?: CSSObject;
      variantContainerSecondary?: CSSObject;
      variantContainerSuccess?: CSSObject;
      variantContainerError?: CSSObject;
      variantContainerWarning?: CSSObject;
      variantContainerInfo?: CSSObject;

      disabled?: CSSObject;
      // Custom
      [key: string]: CSSObject | undefined;
   };
};
