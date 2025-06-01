import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor } from '@pui/material/core';
import type { UnstableSxConfigProps } from '@pui/material/core/styled';

/**
 * Kiểu định nghĩa variant của Divider, gồm:
 * - 'horizontal': dòng kẻ ngang
 * - 'vertical': dòng kẻ dọc
 */
export type DividerVariant = 'horizontal' | 'vertical';

export type PXComponentDivider = {
   defaultProps: {
      /**
       * Kiểu Divider, mặc định là 'horizontal'
       *
       */
      variant: DividerVariant;

      /**
       *  Màu sắc của Divider, nếu không truyền sẽ dùng màu mặc định
       *
       */
      color: ThemeColor | 'default';

      /**
       * Độ dày của đường kẻ (px), mặc định là 1
       *
       */
      thickness: number;

      /**
       *
       *
       */
      orientation: 'left' | 'center' | 'right';
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
      color: Record<ThemeColor, CSSObject>;
   };
};

export type DividerStyledProps = PXComponentDivider['defaultProps'] & UnstableSxConfigProps & SxConfigProps;

export type DividerProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
   Partial<DividerStyledProps> & {
      /**
       * Nội dung con hiển thị trong nút
       */
      children?: React.ReactNode;
   };
