import { CSSObject } from 'styled-components';

import { SxConfigProps, ThemeColorDefault } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

export interface PXComponentBadge {
   defaultProps: {
      /**
       * Màu của badge nếu có, ví dụ: 'primary', 'success', 'error',...
       */
      color: ThemeColorDefault;

      /**
       * Vị trí hiển thị badge: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
       */
      badgePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

      animationType: 'pulse' | 'bounce' | 'wave' | 'wave-multi' | 'none';

      dot: boolean;
   };

   styleOverrides: {
      /**
       * Style cho phần root bọc ngoài của radio.
       * Áp dụng cho thẻ <label> chứa toàn bộ radio và label.
       */
      root: CSSObject;

      /**
       * Style theo từng màu sắc: primary, secondary, v.v.
       * Gồm borderColor và backgroundColor (khi checked).
       */
      color: Record<ThemeColorDefault, CSSObject>;
   };
}

export type BadgeStyledProps = PXComponentBadge['defaultProps'] & UnstableSxConfigProps & SxConfigProps;

export type BadgeProps = Partial<BadgeStyledProps> & {
   content?: string | number;

   maxContent?: number;

   /**
    * Nội dung con hiển thị trong nút
    */
   children?: React.ReactNode;
};
