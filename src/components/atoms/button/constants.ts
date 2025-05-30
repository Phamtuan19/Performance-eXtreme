import type { Palette, PxComponentButton } from '@PUI/core';
import { VARIANTS_BUTTON } from '@PUI/core';

export const CLASS_NAME_BUTTON = 'PXButton';

export const CLASS_NAME_RIPPLE = 'PXRipple';

const BUTTON_DEFAULT_CSS: Required<NonNullable<PxComponentButton['defaultProps']>> = {
   variant: VARIANTS_BUTTON.VARIANT[0],
   color: VARIANTS_BUTTON.COLOR[0],
   size: VARIANTS_BUTTON.SIZE[1],
   disabled: false,
   fullWidth: false,
   startIcon: null,
   endIcon: null,
   loading: false,
   loadingPosition: 'start',
   loadingIndicator: null,
   disableRipple: false,
   loadingContent: null,
};

const createButtonDefaultCssVariant = (palette: Palette): Pick<PxComponentButton, 'styleOverrides'> => {
   return {
      styleOverrides: {
         colorPrimary: {
            color: palette.primary.contrastText,
         },
         colorError: {
            color: palette.error.contrastText,
         },
         colorInfo: {
            color: palette.info.contrastText,
         },
         colorSuccess: {
            color: palette.success.contrastText,
         },
         colorWarning: {
            color: palette.warning.contrastText,
         },
         colorSecondary: {
            color: palette.secondary.contrastText,
         },
         colorText: {
            color: palette.text.secondary,
         },

         // Size
         sizeSmall: {
            padding: '4px 8px',
            fontSize: '0.875rem',
         },
         sizeMedium: {
            padding: '8px 18px',
            fontSize: '0.875rem',
         },
         sizeLarge: {
            padding: '8px 24px',
            fontSize: '1.125rem',
         },

         // variants: VARIANTS_BUTTON,
         // Text Variants
         variantTextPrimary: {
            backgroundColor: 'transparent',
            color: palette.primary.main,
            '&:hover': {
               backgroundColor: palette.blue[100],
            },
         },
         variantTextSecondary: {
            backgroundColor: 'transparent',
            color: palette.secondary.main,
            '&:hover': {
               backgroundColor: palette.pink[100],
            },
         },
         variantTextSuccess: {
            backgroundColor: 'transparent',
            color: palette.success.main,
            '&:hover': {
               backgroundColor: palette.green[100],
            },
         },
         variantTextError: {
            backgroundColor: 'transparent',
            color: palette.error.main,
            '&:hover': {
               backgroundColor: palette.red[100],
            },
         },
         variantTextWarning: {
            backgroundColor: 'transparent',
            color: palette.warning.main,
            '&:hover': {
               backgroundColor: palette.amber[100],
            },
         },
         variantTextInfo: {
            backgroundColor: 'transparent',
            color: palette.info.main,
            '&:hover': {
               backgroundColor: palette.blue[100],
            },
         },

         // Outlined Variants
         variantOutlinedPrimary: {
            border: `1px solid ${palette.primary.main}`,
            backgroundColor: 'transparent',
            color: palette.primary.main,
            '&:hover': {
               backgroundColor: palette.blue[100],
            },
            '&:active': {
               backgroundColor: palette.primary.dark,
               color: palette.primary.contrastText,
            },
         },
         variantOutlinedSecondary: {
            border: `1px solid ${palette.secondary.main}`,
            backgroundColor: 'transparent',
            color: palette.secondary.main,
            '&:hover': {
               backgroundColor: palette.pink[100],
            },
            '&:active': {
               backgroundColor: palette.secondary.dark,
               color: palette.secondary.contrastText,
            },
         },
         variantOutlinedSuccess: {
            border: `1px solid ${palette.success.main}`,
            backgroundColor: 'transparent',
            color: palette.success.main,
            '&:hover': {
               backgroundColor: palette.green[100],
            },
            '&:active': {
               backgroundColor: palette.success.dark,
               color: palette.success.contrastText,
            },
         },
         variantOutlinedError: {
            border: `1px solid ${palette.error.main}`,
            backgroundColor: 'transparent',
            color: palette.error.main,
            '&:hover': {
               backgroundColor: palette.red[100],
            },
            '&:active': {
               backgroundColor: palette.error.dark,
               color: palette.error.contrastText,
            },
         },
         variantOutlinedWarning: {
            border: `1px solid ${palette.warning.main}`,
            backgroundColor: 'transparent',
            color: palette.warning.main,
            '&:hover': {
               backgroundColor: palette.amber[100],
            },
            '&:active': {
               backgroundColor: palette.warning.dark,
               color: palette.warning.contrastText,
            },
         },
         variantOutlinedInfo: {
            border: `1px solid ${palette.info.main}`,
            backgroundColor: 'transparent',
            color: palette.info.main,
            '&:hover': {
               backgroundColor: palette.blue[100],
            },
            '&:active': {
               backgroundColor: palette.info.dark,
               color: palette.info.contrastText,
            },
         },

         // Container Variants
         variantContainerPrimary: {
            backgroundColor: palette.blue[600],
            color: palette.primary.contrastText,
            '&:hover': {
               backgroundColor: palette.primary.dark,
            },
            '&:active': {
               backgroundColor: palette.primary.dark,
            },
         },
         variantContainerSecondary: {
            backgroundColor: palette.pink[600],
            color: palette.secondary.contrastText,
            '&:hover': {
               backgroundColor: palette.secondary.dark,
            },
            '&:active': {
               backgroundColor: palette.secondary.dark,
            },
         },
         variantContainerSuccess: {
            backgroundColor: palette.green[600],
            color: palette.success.contrastText,
            '&:hover': {
               backgroundColor: palette.success.dark,
            },
            '&:active': {
               backgroundColor: palette.success.dark,
            },
         },
         variantContainerError: {
            backgroundColor: palette.red[600],
            color: palette.error.contrastText,
            '&:hover': {
               backgroundColor: palette.error.dark,
            },
            '&:active': {
               backgroundColor: palette.error.dark,
            },
         },
         variantContainerWarning: {
            backgroundColor: palette.amber[600],
            color: palette.warning.contrastText,
            '&:hover': {
               backgroundColor: palette.warning.dark,
            },
            '&:active': {
               backgroundColor: palette.warning.dark,
            },
         },
         variantContainerInfo: {
            backgroundColor: palette.indigo[600],
            color: palette.info.contrastText,
            '&:hover': {
               backgroundColor: palette.info.dark,
            },
            '&:active': {
               backgroundColor: palette.info.dark,
            },
         },
      },
   };
};

export { BUTTON_DEFAULT_CSS, createButtonDefaultCssVariant };
