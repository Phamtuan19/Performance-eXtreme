import styled from 'styled-components';

import type { InputStyledProps } from './input.type';

export const InputContainer = styled('div')<{
   $styleProps: Partial<InputStyledProps>;
}>(({ $styleProps }) => {
   const { fullWidth, size } = $styleProps;

   return {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      width: fullWidth ? '100%' : 'auto',
   };
});

export const InputWrapper = styled('div')<{
   $styleProps: Partial<InputStyledProps>;
}>(({ theme, $styleProps }) => {
   const { variant = 'outline', color = 'primary', disabled } = $styleProps;

   const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
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
      padding: '8px 0',
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

export const InputStyle = styled('input')<{
   $styleProps?: Partial<InputStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium' } = $styleProps || {};

   const sizeStyles = {
      small: { fontSize: '14px', padding: '2px 0' },
      medium: { fontSize: '16px', padding: '4px 0' },
      large: { fontSize: '18px', padding: '6px 0' },
   };

   return {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      flex: 1,
      color: 'inherit',
      fontFamily: 'inherit',
      ...sizeStyles[size],

      '&::placeholder': {
         color: theme.palette.gray['400'],
      },

      '&:disabled': {
         cursor: 'not-allowed',
         opacity: 0.6,
      },
   };
});

export const IconStart = styled('div')({
   display: 'flex',
   alignItems: 'center',
   color: 'inherit',
});

export const IconEnd = styled('div')({
   display: 'flex',
   alignItems: 'center',
   color: 'inherit',
});

export const HelperText = styled('div')<{
   $error?: boolean;
}>(({ theme, $error }) => ({
   fontSize: '12px',
   color: $error ? theme.palette.error.main : theme.palette.gray['600'],
   marginTop: '4px',
}));
