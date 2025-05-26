import { Palette } from '@/core';
import { PxComponentInput } from '@/core/theme/components/input';

export const INPUT_DEFAULT_PROPS: Required<PxComponentInput['defaultProps']> = {
   variant: 'outline',
   color: 'primary',
   size: 'medium',
   startIcon: null,
   endIcon: null,
   disabled: false,
   fullWidth: false,
   loading: false,
   loadingIndicator: null,
   loadingPosition: 'start',
   error: false,
};

export const createInputCssVariant = (
   palette: Palette,
): Pick<Required<NonNullable<PxComponentInput>>, 'styleOverrides'> => {
   return {
      styleOverrides: {
         root: {},

         size: {
            small: {
               fontSize: '0.875rem',
               padding: '0.25rem 0.75rem',
            },
            medium: {
               fontSize: '1rem',
               padding: '0.5rem 0.75rem',
            },
            large: {
               fontSize: '1.125rem',
               padding: '0.75rem 0.75rem',
            },
         },

         color: {
            primary: {},
            secondary: {},
            success: {},
            error: {},
            warning: {},
            info: {},
         },

         variant: {
            outline: {
               backgroundColor: 'transparent',
               borderStyle: 'solid',
            },
            filled: {
               backgroundColor: palette.gray[100],
               border: 'none',
            },
            standard: {
               border: 'none',
               backgroundColor: 'transparent',
               borderBottom: `1px solid ${palette.gray[300]}`,
               borderRadius: 0,
            },
         },
      },
   };
};
