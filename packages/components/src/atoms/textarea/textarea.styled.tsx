import styled from 'styled-components';

import type { TextareaStyledProps } from './textarea.type';

export const TextareaContainer = styled('div')<{
   $styleProps: Partial<TextareaStyledProps>;
}>(({ $styleProps }) => {
   const { fullWidth } = $styleProps;

   return {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      width: fullWidth ? '100%' : 'auto',
   };
});

export const TextareaWrapper = styled('div')<{
   $styleProps: Partial<TextareaStyledProps>;
}>(({ theme, $styleProps }) => {
   const { variant = 'outline', color = 'primary', disabled } = $styleProps;

   const baseStyles = {
      display: 'flex',
      padding: '12px',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      cursor: disabled ? 'not-allowed' : 'text',
   };

   if (variant === 'outline') {
      return {
         ...baseStyles,
         border: `1px solid ${theme.palette[color]?.main || theme.palette.primary.main}`,
         backgroundColor: 'transparent',
         '&:hover': {
            borderColor: theme.palette[color]?.dark || theme.palette.primary.dark,
         },
         '&:focus-within': {
            borderColor: theme.palette[color]?.main || theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${theme.palette[color]?.light || theme.palette.primary.light}33`,
         },
      };
   }

   if (variant === 'filled') {
      return {
         ...baseStyles,
         border: 'none',
         backgroundColor: theme.palette.gray['100'],
         '&:hover': {
            backgroundColor: theme.palette.gray['200'],
         },
         '&:focus-within': {
            backgroundColor: theme.palette.gray['50'],
            boxShadow: `0 0 0 2px ${theme.palette[color]?.light || theme.palette.primary.light}33`,
         },
      };
   }

   // standard variant
   return {
      ...baseStyles,
      border: 'none',
      borderBottom: `1px solid ${theme.palette.gray['300']}`,
      borderRadius: 0,
      padding: '12px 0',
      backgroundColor: 'transparent',
      '&:hover': {
         borderBottomColor: theme.palette[color]?.main || theme.palette.primary.main,
      },
      '&:focus-within': {
         borderBottomColor: theme.palette[color]?.main || theme.palette.primary.main,
         borderBottomWidth: '2px',
      },
   };
});

export const TextareaStyle = styled('textarea')<{
   $styleProps?: Partial<TextareaStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium' } = $styleProps || {};

   const sizeStyles = {
      small: { fontSize: '14px', lineHeight: 1.4 },
      medium: { fontSize: '16px', lineHeight: 1.5 },
      large: { fontSize: '18px', lineHeight: 1.6 },
   };

   return {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      color: 'inherit',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: '80px',
      ...sizeStyles[size],

      '&::placeholder': {
         color: theme.palette.gray['400'],
      },

      '&:disabled': {
         cursor: 'not-allowed',
         opacity: 0.6,
         resize: 'none',
      },
   };
});

export const TextareaHelperText = styled('div')<{
   $error?: boolean;
}>(({ theme, $error }) => ({
   fontSize: '12px',
   color: $error ? theme.palette.error.main : theme.palette.gray['600'],
   marginTop: '4px',
}));
