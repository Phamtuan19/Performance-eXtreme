import { type Palette, type PxComponentTypography, VARIANTS_TYPOGRAPHY } from '@/core';

export const TYPOGRAPHY_DEFAULT_PROPS: PxComponentTypography['defaultProps'] = {
   variant: VARIANTS_TYPOGRAPHY.VARIANTS.h1,
   strong: false,
   underline: false,
   delete: false,
   italic: false,
   color: VARIANTS_TYPOGRAPHY.COLOR[5],
   disabled: false,
};

export const createPXTypographyCssVariant = (palette: Palette): Pick<PxComponentTypography, 'styleOverrides'> => {
   return {
      styleOverrides: {
         root: {},
         variants: {
            h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
            h2: { fontSize: '1.875rem', fontWeight: 600, lineHeight: 1.35 },
            h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
            h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.45 },
            h5: { fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.5 },
            h6: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.55 },
            title: { fontSize: '1.25rem', fontWeight: 600 },
            text: { fontSize: '1rem', fontWeight: 400 },
         },
         color: {
            success: { color: palette.success.main },
            warning: { color: palette.warning.main },
            danger: { color: palette.error.main },
            secondary: { color: palette.secondary.main },
            default: { color: palette.text.primary },
            primary: { color: palette.primary.main },
         },
         strong: {
            fontWeight: 700,
         },
         underline: {
            textDecoration: 'underline',
         },
         delete: {
            textDecoration: 'line-through',
         },
         italic: {
            fontStyle: 'italic',
         },
         disabled: {
            color: palette.text.disabled,
            pointerEvents: 'none',
            userSelect: 'none',
         },
      },
   };
};
