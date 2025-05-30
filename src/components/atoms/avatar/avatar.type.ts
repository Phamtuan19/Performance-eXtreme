import type { CSSObject } from 'styled-components';

import type { TypeInputSize, TypeInputColor, ThemeColor, SxConfigProps } from '@PUI/core';
import type { UnstableSxConfigProps } from '@PUI/core/styled';

// Interface định nghĩa cấu hình mặc định cho PXAvatar component
export interface PXComponentAvatar {
   defaultProps: {
      /**
       * Kích thước avatar (hỗ trợ theo kiểu string như 'small', 'medium', 'large' hoặc số pixel)
       */
      size: TypeInputSize | number;

      /**
       * Hình dạng của avatar: tròn ('circle') hoặc vuông bo góc ('square')
       */
      shape: 'circle' | 'square';

      color: ThemeColor | 'default' | string;

      /**
       * Màu của badge nếu có, ví dụ: 'primary', 'success', 'error',...
       */
      badgeColor: ThemeColor | string;

      /**
       * Có hiển thị badge hay không.
       * - `true`: hiển thị badge trạng thái
       * - `false`: ẩn badge
       */
      showBadge: boolean;

      /**
       * Vị trí hiển thị badge: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
       */
      badgePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
   };

   styleOverrides: {
      /**
       * Style cho phần root bọc ngoài của radio.
       * Áp dụng cho thẻ <label> chứa toàn bộ radio và label.
       */
      root: CSSObject;

      /**
       * Cấu hình style cho từng kích thước của avatar.
       *
       * Mỗi key đại diện cho một kích thước (`small`, `medium`, `large`),
       * giá trị là object CSS tương ứng với kiểu `CSSObject` để tùy biến style.
       *
       * Trường `pixelSize` bắt buộc để xác định kích thước thực tế (width/height) của avatar.
       *
       * Ví dụ:
       * {
       *   small: { pixelSize: 24, fontSize: 12, ... },
       *   medium: { pixelSize: 32, fontSize: 14, ... },
       *   large: { pixelSize: 40, fontSize: 16, ... }
       * }
       */
      size: Record<TypeInputSize, CSSObject & { pixelSize: number }>;

      /**
       * Style theo từng màu sắc: primary, secondary, v.v.
       * Gồm borderColor và backgroundColor (khi checked).
       */
      color: Record<TypeInputColor, CSSObject>;
   };
}

// Props cho styled component Avatar (chỉ dùng để style)
export type AvatarStyledProps = PXComponentAvatar['defaultProps'] &
   Omit<UnstableSxConfigProps, 'color'> &
   SxConfigProps;

// Props chính cho component Avatar
export type AvatarProps = Partial<AvatarStyledProps> &
   React.HTMLAttributes<HTMLDivElement> & {
      /**
       * Đường dẫn ảnh
       */
      src?: string;

      /**
       * Thẻ alt cho ảnh (hữu ích cho SEO và accessibility)
       */
      alt?: string;

      /**
       * Tiêu đề hoặc fallback khi không có ảnh (thường là chữ cái đầu tên)
       */
      title?: string;

      /**
       * Nội dung con, có thể dùng để override mặc định (ảnh, chữ, icon...)
       */
      children?: React.ReactNode;
   };

export type AvatarGroupStyleProps = UnstableSxConfigProps &
   SxConfigProps & {
      spacing: number;

      direction: 'ltr' | 'rtl';
   };

export interface AvatarGroupProps
   extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'content' | 'translate'>,
      Omit<Partial<AvatarGroupStyleProps>, 'translate'> {
   children: React.ReactNode;
   maxCount?: number;
   size?: TypeInputSize | number;
   shape?: 'circle' | 'square';
   collapseAvatar?: (remainingCount: number) => React.ReactNode;
   className?: string;
}
