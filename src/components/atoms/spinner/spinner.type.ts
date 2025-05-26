import { CSSObject } from 'styled-components';

import { ThemeSize, ThemeColor, SxConfigProps } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

export type PXComponentSpinner = {
   defaultProps: {
      /**
       * Kích thước của Switch: 'small' | 'medium' | 'large'.
       * Ảnh hưởng đến kích thước tổng thể của Switch.
       */
      size: ThemeSize;

      /**
       * Màu sắc của tooltip, kiểu màu theo theme định nghĩa
       */
      color: ThemeColor;

      thickness: number;
   };

   styleOverrides: {
      /**
       * Style cho phần root bọc ngoài của radio.
       * Áp dụng cho thẻ <label> chứa toàn bộ radio và label.
       */
      root: CSSObject;

      size: Record<ThemeSize, CSSObject & { thickness?: number }>;

      color: Record<ThemeColor, CSSObject>;
   };
};

export type SpinnerStyleProps = Omit<PXComponentSpinner['defaultProps'], 'thickness'> &
   UnstableSxConfigProps &
   SxConfigProps & {
      fullScreen: boolean;

      thickness?: number;
   };

export type SpinnerProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> & Partial<SpinnerStyleProps>;
