import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';

export interface TooltipSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentTooltip = {
   defaultProps: {
      /**
       * Vị trí tooltip
       */
      placement: 'top' | 'bottom' | 'left' | 'right';

      /**
       * Trigger event
       */
      trigger: 'hover' | 'click' | 'focus';

      /**
       * Delay before showing (ms)
       */
      enterDelay: number;

      /**
       * Delay before hiding (ms)
       */
      leaveDelay: number;

      /**
       * Arrow indicator
       */
      arrow: boolean;
   };

   styleOverrides: {
      root: CSSObject;
      tooltip: CSSObject;
      arrow: CSSObject;
   };
};

export type TooltipStyledProps = PXComponentTooltip['defaultProps'] & TooltipSxConfigProps;

export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> &
   DeepOptional<TooltipStyledProps> & {
      /**
       * Element được wrap bởi tooltip
       */
      children: React.ReactElement;

      /**
       * Nội dung tooltip
       */
      title: React.ReactNode;

      /**
       * Hiển thị tooltip
       */
      open?: boolean;

      /**
       * Callback khi open state thay đổi
       */
      onOpenChange?: (open: boolean) => void;
   };
