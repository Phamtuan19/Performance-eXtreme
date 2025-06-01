import type { Palette } from '@pui/material/core';
import { hexToRgba } from '@pui/material/core/utils';

import type { PXComponentButton } from './button.type';

export const CLASS_NAME_BUTTON = 'px-button';

export const CLASS_NAME_RIPPLE = 'px-ripple';

const createButtonDefaultCssVariant = (palette: Palette): PXComponentButton['styleOverrides'] => {
   return {
      root: {},

      color: {
         primary: {
            color: palette.primary.contrastText,
         },
         error: {
            color: palette.error.contrastText,
         },
         info: {
            color: palette.info.contrastText,
         },
         success: {
            color: palette.success.contrastText,
         },
         warning: {
            color: palette.warning.contrastText,
         },
         secondary: {
            color: palette.secondary.contrastText,
         },
      },

      size: {
         small: {
            padding: '0px 8px',
            fontSize: '0.875rem',
            borderRadius: 4,
            minWidth: 64,
            height: 30,
         },
         medium: {
            padding: '0px 16px',
            fontSize: '1rem',
            borderRadius: 6,
            minWidth: 96,
            height: 34,
         },
         large: {
            padding: '0px 20px',
            fontSize: '1rem',
            borderRadius: 8,
            minWidth: 128,
            height: 40,
         },
      },

      variant: {
         container: {
            primary: {
               backgroundColor: palette.primary.main,
               color: palette.primary.contrastText,
               '--ripple-color': hexToRgba(palette.primary.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.primary.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.primary.dark,
               },
            },
            secondary: {
               backgroundColor: palette.secondary.main,
               color: palette.secondary.contrastText,
               '--ripple-color': hexToRgba(palette.secondary.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.secondary.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.secondary.dark,
               },
            },
            success: {
               backgroundColor: palette.success.main,
               color: palette.success.contrastText,
               '--ripple-color': hexToRgba(palette.success.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.success.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.success.dark,
               },
            },
            error: {
               backgroundColor: palette.error.main,
               color: palette.error.contrastText,
               '--ripple-color': hexToRgba(palette.error.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.error.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.error.dark,
               },
            },
            warning: {
               backgroundColor: palette.warning.main,
               color: palette.warning.contrastText,
               '--ripple-color': hexToRgba(palette.warning.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.warning.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.warning.dark,
               },
            },
            info: {
               backgroundColor: palette.info.main,
               color: palette.info.contrastText,
               '--ripple-color': hexToRgba(palette.info.light, 0.6),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.info.dark, 0.8),
               },
               '&:active': {
                  backgroundColor: palette.info.dark,
               },
            },
         },
         text: {
            primary: {
               backgroundColor: 'transparent',
               color: palette.primary.main,
               '--ripple-color': hexToRgba(palette.primary.light, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.primary.main, 0.1),
               },
            },
            secondary: {
               backgroundColor: 'transparent',
               color: palette.secondary.main,
               '--ripple-color': hexToRgba(palette.secondary.main, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.secondary.main, 0.1),
               },
            },
            success: {
               backgroundColor: 'transparent',
               color: palette.success.main,
               '--ripple-color': hexToRgba(palette.success.light, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.success.light, 0.1),
               },
            },
            error: {
               backgroundColor: 'transparent',
               color: palette.error.main,
               '--ripple-color': hexToRgba(palette.error.light, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.error.light, 0.1),
               },
            },
            warning: {
               backgroundColor: 'transparent',
               color: palette.warning.main,
               '--ripple-color': hexToRgba(palette.warning.light, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.warning.light, 0.1),
               },
            },
            info: {
               backgroundColor: 'transparent',
               color: palette.info.main,
               '--ripple-color': hexToRgba(palette.info.light, 0.3),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.info.light, 0.1),
               },
            },
         },
         outlined: {
            primary: {
               border: `1px solid ${palette.primary.main}`,
               backgroundColor: 'transparent',
               color: palette.primary.main,
               '--ripple-color': hexToRgba(palette.primary.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.primary.light, 0.3),
                  color: palette.primary.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.primary.light, 0.5),
               },
            },
            secondary: {
               border: `1px solid ${palette.secondary.main}`,
               backgroundColor: 'transparent',
               color: palette.secondary.main,
               '--ripple-color': hexToRgba(palette.secondary.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.secondary.light, 0.3),
                  color: palette.secondary.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.secondary.light, 0.5),
               },
            },
            success: {
               border: `1px solid ${palette.success.main}`,
               backgroundColor: 'transparent',
               color: palette.success.main,
               '--ripple-color': hexToRgba(palette.success.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.success.light, 0.3),
                  color: palette.success.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.success.light, 0.5),
               },
            },
            error: {
               border: `1px solid ${palette.error.main}`,
               backgroundColor: 'transparent',
               color: palette.error.main,
               '--ripple-color': hexToRgba(palette.error.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.error.light, 0.3),
                  color: palette.error.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.error.light, 0.5),
               },
            },
            warning: {
               border: `1px solid ${palette.warning.main}`,
               backgroundColor: 'transparent',
               color: palette.warning.main,
               '--ripple-color': hexToRgba(palette.warning.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.warning.light, 0.3),
                  color: palette.warning.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.warning.light, 0.5),
               },
            },
            info: {
               border: `1px solid ${palette.info.main}`,
               backgroundColor: 'transparent',
               color: palette.info.main,
               '--ripple-color': hexToRgba(palette.info.light, 0.5),
               '&:hover': {
                  backgroundColor: hexToRgba(palette.info.light, 0.3),
                  color: palette.info.main,
               },
               '&:active': {
                  backgroundColor: hexToRgba(palette.info.light, 0.5),
               },
            },
         },
      },
   };
};

export { createButtonDefaultCssVariant };
