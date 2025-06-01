import { merge } from 'lodash';
import styled from 'styled-components';

import type { SxProps, Theme } from '@pui/material/core';

import type { PXComponentRadio, RadioStyledProps } from './radio.type';

const RADIO_CSS_VARIANT: PXComponentRadio['styleOverrides'] = {
   root: {},
   size: {
      large: {
         fontSize: '1.125rem',
         width: '24px',
         height: '24px',
      },
      medium: {
         fontSize: '1rem',
         width: '20px',
         height: '20px',
      },
      small: {
         fontSize: '0.875rem',
         width: '18px',
         height: '18px',
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
};

export const RadioWrapper = styled('label')<{
   theme: Theme;
   $styleProps: Omit<RadioStyledProps, 'size' | 'indeterminate' | 'defaultChecked' | 'error'>;
}>(({ theme, $styleProps }) => {
   const { sx, disabled, color, ...restProps } = $styleProps;

   const styleOverrides = merge({}, theme.components?.PXCheckBox?.styleOverrides, RADIO_CSS_VARIANT);

   return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      gap: '0.5rem',
      userSelect: 'none',
      transition: 'color 0.2s ease',
      color: disabled ? theme.palette.disabled.color : theme.palette.common.black,

      // Hover label sẽ ảnh hưởng span bên trong
      '&:hover span': {
         borderColor: disabled ? '#d9d9d9' : theme.palette[color].main,
      },

      ...styleOverrides.root,
      ...theme.sxConfig({ ...restProps, sx }),
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
         boxShadow: `0 0 0 3px ${theme.palette[color].main}33`,
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

   const styleOverrides = merge({}, theme.components?.PXCheckBox?.styleOverrides, RADIO_CSS_VARIANT);

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

      ...(checked && {
         '&::after': {
            content: "''",
            position: 'absolute',
            insetInlineStart: '50%',
            insetBlockStart: '50%',
            width: styleOverrides.size[size].width ? `calc(${styleOverrides.size[size].width} * 0.4)` : '40%',
            height: styleOverrides.size[size].height ? `calc(${styleOverrides.size[size].height} * 0.4)` : '40%',
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

      ...styleOverrides.size[size],

      ...styleOverrides.color[color],
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
