import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface BadgeSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentBadge = {
   defaultProps: {
      /**
       * Màu sắc badge
       */
      color: ThemeColor;

      /**
       * Kích thước badge
       */
      size: ThemeSize;

      /**
       * Hiển thị dạng dot nhỏ
       */
      dot: boolean;

      /**
       * Vị trí badge
       */
      anchorOrigin: {
         vertical: 'top' | 'bottom';
         horizontal: 'left' | 'right';
      };

      /**
       * Animation type
       */
      animationType: 'pulse' | 'wave' | 'none';

      /**
       * Ẩn badge khi content = 0
       */
      showZero: boolean;

      /**
       * Max count hiển thị
       */
      max: number;
   };

   styleOverrides: {
      root: CSSObject;
      badge: CSSObject;
      dot: CSSObject;
   };
};

export type BadgeStyledProps = PXComponentBadge['defaultProps'] & BadgeSxConfigProps;

export type BadgeProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'content'> &
   DeepOptional<BadgeStyledProps> & {
      /**
       * Element được wrap bởi badge
       */
      children: React.ReactNode;

      /**
       * Nội dung hiển thị trên badge
       */
      content?: React.ReactNode | number;
   };
