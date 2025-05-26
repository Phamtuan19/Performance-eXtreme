import { SxProps, Theme, VARIANTS_BUTTON } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

export interface ButtonBaseProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
      UnstableSxConfigProps {
   /**
    * Custom style với hệ thống sx (hỗ trợ responsive, theme-aware)
    */
   sx?: SxProps<Theme>;

   /**
    * Nội dung con hiển thị trong nút
    */
   children?: React.ReactNode;
}

export interface ButtonStyleRoot extends UnstableSxConfigProps {
   /**
    * Trạng thái disabled của nút
    */
   disabled?: boolean;

   /**
    * Nút chiếm toàn bộ chiều ngang của container
    */
   fullWidth?: boolean;

   /**
    * Custom style hệ thống sx
    */
   sx?: SxProps<Theme>;

   /**
    * Kiểu hiển thị nút (contained, outlined, text)
    */
   variant?: (typeof VARIANTS_BUTTON.VARIANT)[number];

   /**
    * Màu sắc nút (primary, secondary, v.v.)
    */
   color?: (typeof VARIANTS_BUTTON.COLOR)[number];

   /**
    * Kích thước nút (sm, md, lg)
    */
   size?: (typeof VARIANTS_BUTTON.SIZE)[number];
}

export interface ButtonProps extends ButtonBaseProps, UnstableSxConfigProps {
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
}
