import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor } from '@pui/theme';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

// Simplified SxConfigProps for typography
export interface SxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentTypography = {
   defaultProps: {
      /**
       * Loại style chữ theo hệ thống định nghĩa
       */
      variant: TypographyVariant;

      /**
       * Làm chữ đậm
       */
      strong: boolean;

      /**
       * Gạch dưới
       */
      underline: boolean;

      /**
       * Gạch ngang xóa chữ
       */
      delete: boolean;

      /**
       * In nghiêng
       */
      italic: boolean;

      /**
       * Màu preset
       */
      color: ThemeColor | 'default';
   };

   styleOverrides: {
      root: CSSObject;
      variants: Record<TypographyVariant, CSSObject>;
      color: Record<ThemeColor | 'default', CSSObject>;
      strong: CSSObject;
      underline: CSSObject;
      delete: CSSObject;
      italic: CSSObject;
   };
};

export type TypographyStyledProps = PXComponentTypography['defaultProps'] & SxConfigProps;

export type TypographyProps = Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'content'> &
   DeepOptional<TypographyStyledProps> & {
      /**
       * Loại thẻ/component được render (mặc định là 'button', có thể là 'a', 'div',
       * hoặc custom component)
       */
      component?: React.ElementType;
   };
