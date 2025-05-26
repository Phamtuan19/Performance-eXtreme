import { CSSObject } from 'styled-components';

import { TypeInputColor, TypeInputSize, TypeInputVariant } from './input';

export interface PxComponentInput {
   defaultProps: {
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
       * Custom icon loading thay vì mặc định (ví dụ: spinner riêng)
       */
      loadingIndicator?: React.ReactNode | null;

      /**
       * Vị trí hiển thị icon loading: 'start' | 'end' | 'center'
       */
      loadingPosition?: 'start' | 'end';

      error?: boolean;
   };
   styleOverrides: {
      root?: CSSObject;
      size?: Record<TypeInputSize, CSSObject>;
      color?: Record<TypeInputColor, CSSObject>;
      variant?: Record<TypeInputVariant, CSSObject>;
   };
}
