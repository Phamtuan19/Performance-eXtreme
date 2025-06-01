import type { Palette } from '@pui/material/core';

import type { PxComponentInput } from './input.type';

export const createInputCssVariant = (
   palette: Palette,
): Pick<Required<NonNullable<PxComponentInput>>, 'styleOverrides'> => {
   return {
      styleOverrides: {
         root: {},

         size: {
            small: {
               fontSize: '0.875rem',
               '& .px-input-root': {
                  minHeight: '28px',
                  padding: '0rem 0.75rem',
               },
            },
            medium: {
               fontSize: '1rem',
               '& .px-input-root': {
                  minHeight: '36px',
                  padding: '0rem 0.75rem',
               },
            },
            large: {
               fontSize: '1.125rem',
               '& .px-input-root': {
                  minHeight: '48px',
                  padding: '0rem 0.75rem',
               },
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
               borderColor: 'transparent',
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
