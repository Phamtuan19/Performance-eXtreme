import styled from 'styled-components';

import { SxProps, Theme, TypeInputColor, TypeInputSize } from '@PUI/core';
import { sxConfig } from '@PUI/core/styled';

import { RADIO_CSS_VARIANT } from './constants';
import { RadioStyledProps } from './radio.type';

export const RadioWrapper = styled('label')<{
   theme: Theme;
   $styleProps: Omit<RadioStyledProps, 'size' | 'indeterminate' | 'defaultChecked' | 'error'>;
}>(({ theme, $styleProps }) => {
   const { sx, disabled, color, ...restProps } = $styleProps;
   const styleOverrides = theme.components?.PXCheckBox?.styleOverrides?.root ?? RADIO_CSS_VARIANT;

   return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      gap: '0.5rem',
      userSelect: 'none',
      transition: 'color 0.2s ease',
      color: disabled ? theme.palette.text.disabled : theme.palette.text.primary,

      // Hover label sẽ ảnh hưởng span bên trong
      '&:hover span': {
         borderColor: disabled ? '#d9d9d9' : theme.palette[color as TypeInputColor].main,
      },

      ...styleOverrides,
      ...sxConfig({ ...restProps, sx }),
   };
});

export const RadioBoxContainer = styled('span')`
   position: relative;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: max-content;
   height: max-content;
`;

export const InputRadio = styled('input').attrs({ type: 'checkbox' })<{
   theme: Theme;
   $styleProps: Pick<RadioStyledProps, 'color'>;
}>((props) => {
   const { theme, $styleProps } = props;

   const { color } = $styleProps;

   return {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0,
      margin: 0,
      cursor: 'pointer',
      zIndex: 1,

      '&:focus + span': {
         boxShadow: `0 0 0 3px ${theme.palette[color as TypeInputColor].main}33`,
      },

      '&:disabled': {
         cursor: 'not-allowed',
      },
   };
});

export const RadioInner = styled.span<{
   theme: Theme;
   $styleProps: Pick<RadioStyledProps, 'disabled' | 'checked' | 'size' | 'color'>;
}>(({ theme, $styleProps }) => {
   const { size, checked, disabled, color } = $styleProps;

   const PXRadio = theme.components?.PXInput;

   const cssSize =
      PXRadio?.styleOverrides?.size?.[size as TypeInputSize] ?? RADIO_CSS_VARIANT.size[size as TypeInputSize];

   const borderColor = theme.palette.disabled.borderColor;

   const backgroundColor = checked ? theme.palette[color].main : theme.palette.common.white;

   return {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border: `1.5px solid ${checked ? theme.palette[color].main : borderColor}`,
      backgroundColor: backgroundColor,
      transition: 'all 0.2s',

      ...cssSize,

      ...(checked && {
         '&::after': {
            content: "''",
            position: 'absolute',
            insetInlineStart: '50%',
            insetBlockStart: '50%',
            width: cssSize.width ? `calc(${cssSize.width} * 0.4)` : '40%',
            height: cssSize.height ? `calc(${cssSize.height} * 0.4)` : '40%',
            borderRadius: '50%',
            backgroundColor: theme.palette.common.white,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            transition: 'background-color 0.2s ease',
         },
      }),

      ...(disabled && {
         opacity: 0.6,
         pointerEvents: 'none',
      }),

      ...(PXRadio?.styleOverrides?.color?.[color as TypeInputColor] ?? {}),
   };
});

export const RadioBoxLabel = styled('span')<{
   theme: Theme;
   $disabled: boolean;
}>(({ theme, $disabled }) => ({
   color: $disabled ? theme.palette.disabled.color : theme.palette.common.black,
   userSelect: 'none',
   cursor: $disabled ? 'not-allowed' : 'pointer',
   transition: 'color 0.2s ease',
}));

export const RadioGroupWrapper = styled.div<{
   $styleProps: {
      direction?: 'row' | 'column';
      sx?: SxProps<Theme>;
      disabled?: boolean;
      error?: boolean;
   };
}>((props) => {
   const { $styleProps } = props;

   const { direction } = $styleProps;

   return {
      display: 'flex',
      flexDirection: direction,
      gap: 8,
   };
});
