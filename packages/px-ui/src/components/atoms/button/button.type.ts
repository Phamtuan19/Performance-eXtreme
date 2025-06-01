import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor, ThemeSize, ThemeVariant } from '@pui/material/core';
import type { DeepOptional } from '@pui/material/core/helpers';

export type PXComponentButton = {
   defaultProps: {
      /**
       * Kiểu hiển thị của nút: 'contained' | 'outlined' | 'text'
       */
      variant: ThemeVariant;

      /**
       * Màu sắc của nút: 'primary' | 'secondary' | 'danger' | 'success' | ...
       */
      color: ThemeColor;

      /**
       * Kích thước của nút: 'sm' | 'md' | 'lg'
       */
      size: ThemeSize;

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
       * Vị trí hiển thị icon loading: 'start' | 'end' | 'center'
       */
      loadingPosition: 'start' | 'end' | 'center';

      /**
       * Custom icon loading thay vì mặc định (ví dụ: spinner riêng)
       */
      loadingIndicator: React.ReactNode | null;

      /**
       * Custom nội dung hiển thị khi đang loading (thay thế children)
       */
      loadingContent: React.ReactNode | null;

      /**
       * Tắt hiệu ứng ripple khi click (thường để tăng hiệu suất hoặc đơn giản UI)
       */
      disableRipple: boolean;
   };

   styleOverrides: {
      root: CSSObject;

      color: Record<ThemeColor, CSSObject>;

      size: Record<ThemeSize, CSSObject>;

      variant: Record<ThemeVariant, Record<ThemeColor, CSSObject>>;
   };
};

export type ButtonStyleProps = PXComponentButton['defaultProps'] & SxConfigProps;

export type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'value'> &
   ButtonStyleProps & {
      /**
       * Nội dung con hiển thị trong nút
       */
      children?: React.ReactNode;
   };

export type ButtonProps = DeepOptional<ButtonBaseProps> & {
   /**
    * Icon hiển thị ở đầu nội dung nút
    */
   startIcon?: React.ReactNode;

   /**
    * Icon hiển thị ở cuối nội dung nút
    */
   endIcon?: React.ReactNode;

   /**
    * Loại thẻ/component được render (mặc định là 'button', có thể là 'a', 'div',
    * hoặc custom component)
    */
   component?: 'button' | 'a' | React.ElementType;

   /**
    * href của thẻ <a> nếu component là 'a'
    * Nếu không truyền, sẽ không render thẻ <a>
    * Nếu truyền, sẽ render thẻ <a> với href
    * và component sẽ được chuyển thành 'a'
    */
   href?: string;
};
