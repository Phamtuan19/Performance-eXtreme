import type { SxConfigProps, SxProps, Theme, TypographyVariant } from '@PUI/core';
import type { UnstableSxConfigProps } from '@PUI/core/styled';
import type { VARIANTS_TYPOGRAPHY } from '@PUI/core/theme/components/typography';

type TypographyCustomProps = {
   /**
    * Loại thẻ/component được render (mặc định là 'button', có thể là 'a', 'div',
    * hoặc custom component)
    */
   component?: React.ElementType;

   /**
    * Loại style chữ theo hệ thống định nghĩa
    */
   variant?: TypographyVariant;

   /**
    * Làm chữ đậm
    */
   strong?: boolean;

   /**
    * Gạch dưới
    */
   underline?: boolean;

   /**
    * Gạch ngang xóa chữ
    */
   delete?: boolean;

   /**
    * In nghiêng
    */
   italic?: boolean;

   /**
    * Màu preset
    */
   color?: (typeof VARIANTS_TYPOGRAPHY.COLOR)[number];

   /**
    * Trạng thái vô hiệu hóa
    */
   disabled?: boolean;

   sx?: SxProps<Theme>;
};

export type TypographyProps = Omit<React.HTMLAttributes<HTMLElement>, 'color' | 'content'> &
   Omit<SxConfigProps, 'content'> &
   UnstableSxConfigProps &
   TypographyCustomProps;

export interface TypographyStyleRoot extends TypographyProps {}
