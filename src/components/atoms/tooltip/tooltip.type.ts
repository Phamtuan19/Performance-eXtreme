import { Placement } from '@floating-ui/dom';
import { CSSObject } from 'styled-components';

import { SxConfigProps, ThemeColor } from '@PUI/core';
import { UnstableSxConfigProps } from '@PUI/core/styled';

export type PXComponentTooltip = {
   defaultProps: {
      /**
       * Vị trí hiển thị tooltip, có thể là 'top', 'bottom', 'left', hoặc 'right'
       */
      placement: Placement;

      /**
       * Khoảng cách (px) giữa tooltip và phần tử được hover/trigger
       */
      offset: number;

      /**
       * Thời gian delay (ms) trước khi tooltip hiển thị hoặc ẩn đi
       */
      delay: number;

      /**
       * Hiển thị mũi tên nhọn (arrow) hay không
       */
      arrow: boolean;

      /**
       * Màu sắc của tooltip, kiểu màu theo theme định nghĩa
       */
      color: ThemeColor | 'default';
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
      color: Record<ThemeColor | 'default', CSSObject>;
   };
};

export type TooltipStyleProps = PXComponentTooltip['defaultProps'] & UnstableSxConfigProps & SxConfigProps;

export type TooltipProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
   Partial<TooltipStyleProps> & {
      /**
       * Nội dung hiển thị bên trong tooltip
       */
      title: React.ReactNode;

      /**
       * Phần tử con sẽ trigger tooltip khi hover
       */
      children: React.ReactElement;

      /**
       * Hiển thị tooltip theo trạng thái mở/đóng
       */
      open?: boolean;

      tooltipClassName?: string;
   };
