import { merge } from 'lodash';
import styled from 'styled-components';

import type { Theme } from '@PUI/core';

import { createInputCssVariant } from './constants';
import type { InputStyledProps } from './input.type';

export const InputContainer = styled.div<{
   $styleProps: Omit<
      InputStyledProps,
      | 'startIcon'
      | 'endIcon'
      | 'color'
      | 'variant'
      | 'disabled'
      | 'loading'
      | 'loadingIndicator'
      | 'loadingPosition'
      | 'error'
   >;
}>(({ theme, $styleProps }) => {
   const { fullWidth, size, ...resProps } = $styleProps;

   const inputCssVariant = createInputCssVariant(theme.palette).styleOverrides;

   const styleOverrides = merge({}, inputCssVariant, theme.components?.PXInput?.styleOverrides);

   return {
      boxSizing: 'border-box',
      display: 'inline-flex',
      flexDirection: 'column',
      width: fullWidth ? '100%' : 'auto',
      gap: 4,

      ...styleOverrides.root,

      ...styleOverrides.size[size],

      ...theme.sxConfig(resProps),
   };
});

export const InputWrapper = styled('div')<{
   theme: Theme;
   $styleProps: Pick<InputStyledProps, 'color' | 'variant' | 'disabled'>;
}>(({ theme, $styleProps }) => {
   const { color, variant, disabled } = $styleProps;

   const inputCssVariant = createInputCssVariant(theme.palette).styleOverrides;

   const styleOverrides = merge({}, inputCssVariant, theme.components?.PXInput?.styleOverrides);

   const fallbackColor = theme.palette.primary?.light || '#3b82f6';
   const paletteColor = theme.palette[color] || theme.palette.primary;
   const borderColorHover = paletteColor?.main;
   const borderColorFocus = paletteColor?.main || fallbackColor;
   const boxShadowColor = paletteColor?.light || fallbackColor;

   return {
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'stretch',
      fontSize: '1rem',
      outline: 'none',
      border: `1px solid ${color === 'error' ? theme.palette.error.main : theme.palette.gray[300]}`,
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease',
      width: '100%',
      cursor: disabled ? 'not-allowed' : 'text',

      ...(disabled
         ? {
              borderColor: theme.palette.gray[300],
              backgroundColor: theme.palette.gray[100],
              boxShadow: 'none',

              '& .px-input-icon': {
                 backgroundColor: theme.palette.disabled.backgroundColor,
              },
           }
         : {
              '&:hover': {
                 borderColor:
                    variant === 'outline' ? (disabled ? theme.palette.gray[300] : borderColorHover) : 'transparent',
              },

              '&:focus-within': {
                 borderBottomColor:
                    variant === 'standard' ? (disabled ? theme.palette.gray[300] : borderColorFocus) : undefined,

                 borderColor:
                    variant === 'filled' || variant === 'outline'
                       ? disabled
                          ? theme.palette.gray[300]
                          : borderColorFocus
                       : undefined,

                 boxShadow: disabled ? 'none' : variant === 'outline' ? `0 0 0 2px ${boxShadowColor}66` : 'none',
              },
           }),

      ...styleOverrides.color?.[color],

      ...styleOverrides.variant?.[variant],
   };
});

export const InputStyle = styled('input')<{
   theme: Theme;
}>(({ theme }) => {
   return {
      width: '100%',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: 'inherit',
      border: 'none',
      outline: 'none',
      boxSizing: 'border-box',
      flex: 1,
      height: '100%',
      backgroundColor: 'transparent',

      '&::placeholder': {
         color: theme.palette.gray[400],
         opacity: 1,
      },

      '&:focus': {
         outline: 'none',
         transition: 'all 0.2s ease',
      },

      '&:disabled': {
         color: theme.palette.gray[500],
         cursor: 'not-allowed',
         backgroundColor: theme.palette.gray[100],
         borderColor: theme.palette.gray[300],
      },

      '&[readonly]': {
         backgroundColor: theme.palette.gray[100],
         cursor: 'default',
         color: theme.palette.gray[700],
      },
   };
});

export const IconStart = styled('span')<{ theme: Theme }>(({ theme }) => ({
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'stretch',
   height: '100%',
   minWidth: '2.5rem',
   color: theme.palette.gray[600],
}));
export const IconEnd = styled('span')<{ theme: Theme }>(({ theme }) => ({
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'stretch',
   height: '100%',
   minWidth: '2.5rem',
   color: theme.palette.gray[600],
}));

export const HelperText = styled('div')<{ theme: Theme; $error?: boolean }>`
   font-size: 0.85rem;
   margin-top: 4px;
   color: ${({ theme, $error }) => {
      return $error ? theme.palette.error.main : theme.palette.gray[600];
   }};
   user-select: none;
`;
