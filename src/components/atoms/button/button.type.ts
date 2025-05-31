import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor, ThemeSize, ThemeVariant, VARIANTS_BUTTON } from '@PUI/core';

export type PXComponentButton = {
   defaultProps?: {
      /**
       * Kiểu hiển thị của nút: 'contained' | 'outlined' | 'text'
       */
      variant?: ThemeVariant;

      /**
       * Màu sắc của nút: 'primary' | 'secondary' | 'danger' | 'success' | ...
       */
      color?: ThemeColor;

      /**
       * Kích thước của nút: 'sm' | 'md' | 'lg'
       */
      size?: ThemeSize;

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

export type ButtonStyleProps = PXComponentButton['defaultProps'] & SxConfigProps;

export type ButtonBaseProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'value'> &
   ButtonStyleProps & {
      /**
       * Nội dung con hiển thị trong nút
       */
      children?: React.ReactNode;
   };

export type ButtonProps = ButtonBaseProps & {
   /**
    * Icon hiển thị ở đầu nội dung nút
    */
   startIcon?: React.ReactNode;

   /**
    * Icon hiển thị ở cuối nội dung nút
    */
   endIcon?: React.ReactNode;

   /**
    * Trạng thái loading của nút (hiển thị loading indicator, disable button)
    */
   loading?: boolean;

   /**
    * Vị trí hiển thị biểu tượng loading:
    * - 'start': thay thế `startIcon`
    * - 'end': thay thế `endIcon`
    * - 'center': thay thế toàn bộ nội dung
    */
   loadingPosition?: 'start' | 'end' | 'center';

   /**
    * Nội dung hiển thị khi loading = true
    * Nếu không truyền sẽ dùng nội dung gốc (`children`)
    */
   loadingContent?: React.ReactNode;

   /**
    * Component loading được hiển thị (spinner, icon, v.v.)
    * Nếu không truyền sẽ mặc định là <CircularProgress />
    */
   loadingIndicator?: React.ReactNode;

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

   /**
    * Kích thước nút: ví dụ 'sm', 'md', 'lg'
    * Lấy từ `VARIANTS_BUTTON.SIZE`
    */
   size?: (typeof VARIANTS_BUTTON.SIZE)[number];

   /**
    * Kiểu nút: ví dụ 'contained', 'outlined', 'text'
    * Lấy từ `VARIANTS_BUTTON.VARIANT`
    */
   variant?: (typeof VARIANTS_BUTTON.VARIANT)[number];

   /**
    * Màu sắc của nút: ví dụ 'primary', 'secondary'
    * Lấy từ `VARIANTS_BUTTON.COLOR`
    */
   color?: (typeof VARIANTS_BUTTON.COLOR)[number];

   /**
    * Tắt hiệu ứng ripple khi click vào nút
    */
   disableRipple?: boolean;

   /**
    * Nút sẽ chiếm toàn bộ chiều ngang container
    */
   fullWidth?: boolean;
};
