import styled, { CSSObject } from 'styled-components';

import { Theme } from '@/core';
import { sxConfig } from '@/core/styled';

import { createInputCssVariant } from './constants';
import { InputStyledProps } from './input.type';

export const InputWrapper = styled('div')<{
   theme: Theme;
   $styleProps: Required<NonNullable<Omit<InputStyledProps, 'fullWidth' | 'startIcon' | 'endIcon' | 'size'>>>;
}>(({ theme, $styleProps }) => {
   const { sx, color, variant, disabled, ...restProps } = $styleProps;

   const fallbackColor = theme.palette.primary?.light || '#3b82f6';
   const paletteColor = theme.palette[color] || theme.palette.primary;
   const borderColorHover = paletteColor?.main;
   const borderColorFocus = paletteColor?.main || fallbackColor;
   const boxShadowColor = paletteColor?.light || fallbackColor;

   const styleOverrides =
      theme.components?.PXInput?.styleOverrides ?? createInputCssVariant(theme.palette).styleOverrides;

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
      //   height: 'max-content',
      cursor: disabled ? 'not-allowed' : 'text',

      ...(disabled
         ? {
              borderColor: theme.palette.gray[300],
              backgroundColor: theme.palette.gray[100],
              boxShadow: 'none',
           }
         : {
              '&:hover': {
                 borderColor: disabled ? theme.palette.gray[300] : borderColorHover,
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

                 boxShadow: disabled ? 'none' : variant !== 'standard' ? `0 0 0 2px ${boxShadowColor}66` : 'none',
              },
           }),

      ...styleOverrides.color?.[color],
      ...styleOverrides.variant?.[variant!],
      ...sxConfig({ ...styleOverrides.root, sx, ...restProps }),
   };
});

export const InputStyle = styled('input')<{
   theme: Theme;
   $styleProps: Pick<InputStyledProps, 'size' | 'variant'>;
}>(({ theme, $styleProps }) => {
   const { size, variant } = $styleProps;

   const styleOverrides =
      theme.components?.PXInput?.styleOverrides ?? createInputCssVariant(theme.palette).styleOverrides;

   const palette = theme.palette;
   const gray = palette.gray ?? palette.grey ?? palette.neutral;

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
      backgroundColor: variant === 'filled' ? gray[100] : 'transparent',

      '&::placeholder': {
         color: gray[400],
         opacity: 1,
      },

      '&:focus': {
         outline: 'none',
         transition: 'all 0.2s ease',
      },

      '&:disabled': {
         color: gray[500],
         cursor: 'not-allowed',
         backgroundColor: gray[100],
         borderColor: gray[300],
      },

      '&[readonly]': {
         backgroundColor: gray[100],
         cursor: 'default',
         color: gray[700],
      },

      ...styleOverrides.size?.[size!],
   };
});

const sharedIconStyle = (theme: Theme): CSSObject => ({
   //    pointerEvents: 'none',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'stretch',
   color: theme.palette.gray[600],
   paddingLeft: 12,
   paddingRight: 12,
});

export const IconStart = styled('span')<{ theme: Theme }>(({ theme }) => sharedIconStyle(theme));
export const IconEnd = styled('span')<{ theme: Theme }>(({ theme }) => sharedIconStyle(theme));

export const HelperText = styled('div')<{ theme: Theme; $error?: boolean }>`
   font-size: 0.85rem;
   margin-top: 4px;
   color: ${({ theme, $error }) => {
      return $error ? theme.palette.error.main : theme.palette.gray[600];
   }};
   user-select: none;
`;

export const InputContainer = styled.div<{ $styleProps: Pick<InputStyledProps, 'fullWidth' | 'size'> }>(
   ({ theme, $styleProps }) => {
      const { fullWidth, size } = $styleProps;

      const styleOverrideSize =
         theme.components?.PXInput?.styleOverrides?.size ?? createInputCssVariant(theme.palette).styleOverrides.size;

      let heightValue: string | number | undefined = undefined;
      const sizeStyle = styleOverrideSize?.[size ?? 'medium'];
      if (typeof sizeStyle === 'object' && sizeStyle !== null && 'height' in sizeStyle) {
         heightValue = sizeStyle.height;
      } else if (typeof sizeStyle === 'string' || typeof sizeStyle === 'number') {
         heightValue = sizeStyle;
      }

      return {
         boxSizing: 'border-box',
         display: 'inline-flex',
         flexDirection: 'column',
         width: fullWidth ? '100%' : 'auto',
         height: heightValue,
         gap: 4,
      };
   },
);
