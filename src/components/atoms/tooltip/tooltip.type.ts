import { Placement } from '@floating-ui/dom';

import { SxConfigProps, ThemeColorDefault } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

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
      color: ThemeColorDefault | 'default';
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
