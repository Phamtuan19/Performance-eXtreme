import type { Theme } from './themeCore';

export const createMixins = (theme: Theme) => {
   const { typography, shadows, spacing } = theme;

   return {
      // Ví dụ thanh toolbar cố định chiều cao
      toolbar: {
         minHeight: typography.pxToRem(56),
         [`@media (min-width:${theme.breakpoints.values.sm}px)`]: {
            minHeight: typography.pxToRem(64),
         },
      },

      // Truncate 1 dòng
      textTruncate: {
         overflow: 'hidden',
         whiteSpace: 'nowrap',
         textOverflow: 'ellipsis',
      },

      // Bo góc đồng nhất theo theme
      borderRadius: (value = 1) => ({
         borderRadius: typography.pxToRem(theme.shape.borderRadius * value),
      }),

      // Áp dụng shadow
      shadow: (level = 1) => ({
         boxShadow: shadows[level],
      }),

      // Tự động padding ngang
      spacingX: (factor = 1) => ({
         paddingLeft: spacing.spacingFn(factor),
         paddingRight: spacing.spacingFn(factor),
      }),

      // Xử lý trạng thái disabled
      disabled: {
         opacity: 0.5,
         pointerEvents: 'none',
         cursor: 'not-allowed',
      },
   };
};
