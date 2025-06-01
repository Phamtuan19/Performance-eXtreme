import type { CSSObject } from 'styled-components';

import type { TypographyVariant } from '@pui/material/core/types';

import type { VARIANTS_TYPOGRAPHY } from './typography';

export type PxComponentTypography = {
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
      color: (typeof VARIANTS_TYPOGRAPHY.COLOR)[number];

      /**
       * Trạng thái vô hiệu hóa
       */
      disabled: boolean;
   };
   styleOverrides: {
      root: CSSObject;
      variants: Record<TypographyVariant, CSSObject>;
      color: Record<(typeof VARIANTS_TYPOGRAPHY.COLOR)[number], CSSObject>;
      strong: CSSObject;
      underline: CSSObject;
      delete: CSSObject;
      italic: CSSObject;
      disabled: CSSObject;
   };
};
