import styled, { css, CSSObject, keyframes } from 'styled-components';

import { Theme, TypeInputColor, TypeInputSize } from '@/core';
import { sxConfig } from '@/core/styled';

import { CheckBoxStyledProps } from './checkbox.type';
import { createCheckboxCssVariant } from './constants';

const checkmarkIn = keyframes`
  0% {
    transform: translate(-50%, -60%) rotate(45deg) scale(0.3);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -60%) rotate(45deg) scale(0.6);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -60%) rotate(45deg) scale(1);
    opacity: 1;
  }
`;

const indeterminateIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scaleX(0.3);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scaleX(0.6);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scaleX(1);
    opacity: 1;
  }
`;

export const CheckBoxWrapper = styled('label')<{
   theme: Theme;
   $styleProps: Omit<CheckBoxStyledProps, 'size' | 'indeterminate' | 'defaultChecked' | 'error'>;
}>(({ theme, $styleProps }) => {
   const { sx, disabled, color, ...restProps } = $styleProps;
   const styleOverrides = theme.components?.PXCheckBox?.styleOverrides?.root ?? {};

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

export const CheckBoxContainer = styled('span')`
   position: relative;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: max-content;
   height: max-content;
`;

export const InputCheckBox = styled('input').attrs({ type: 'checkbox' })<{
   theme: Theme;
   $styleProps: Pick<CheckBoxStyledProps, 'color'>;
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

export const CheckBoxInner = styled('span')<{
   theme: Theme;
   $styleProps: Pick<CheckBoxStyledProps, 'disabled' | 'checked' | 'size' | 'color' | 'indeterminate'>;
}>(({ theme, $styleProps }) => {
   const { checked, disabled, size, color, indeterminate } = $styleProps;

   const PXCheckBox = theme.components?.PXCheckBox;
   const cssVariant = createCheckboxCssVariant(theme.palette);

   const cssSize = PXCheckBox?.styleOverrides?.size?.[size as TypeInputSize] ?? cssVariant.size[size as TypeInputSize];
   const cssColor =
      PXCheckBox?.styleOverrides?.color?.[color as TypeInputColor] ?? cssVariant.color[color as TypeInputColor];

   const borderColor = theme.palette.disabled.borderColor;

   const backgroundColor = checked ? theme.palette[color].main : theme.palette.common.white;

   const afterStyle = css`
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: ${indeterminate ? 'white' : 'transparent'};
      width: ${indeterminate ? '50%' : '27.78%'};
      height: ${indeterminate ? '2px' : '50%'};
      border: ${indeterminate ? '0' : 'solid white'};
      border-width: 0 2px 2px 0;
      transform: ${indeterminate
         ? 'translate(-50%, -50%) scale(1)'
         : checked
           ? 'translate(-50%, -70%) rotate(45deg) scale(1)'
           : 'translate(-50%, -70%) rotate(45deg) scale(0)'};

      opacity: ${checked || indeterminate ? 1 : 0};
      transition:
         transform 0.2s ease,
         opacity 0.2s ease;
      pointer-events: none;

      ${checked &&
      css`
         animation: ${indeterminate ? indeterminateIn : checkmarkIn} 0.2s ease;
      `}

      ${disabled &&
      css`
         border-color: ${theme.palette.gray[300]};
      `}
   `;

   return css`
      box-sizing: border-box;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid ${checked ? theme.palette[color].main : borderColor};
      border-radius: 4px;
      background-color: ${backgroundColor};
      overflow: hidden;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      transition:
         background-color 0.2s ease,
         border-color 0.2s ease,
         box-shadow 0.2s ease,
         transform 0.15s ease;

      &:active {
         transform: ${disabled ? 'none' : 'scale(0.95)'};
      }

      &::after {
         ${afterStyle}
      }

      ${css(cssSize as CSSObject)}
      ${css(cssColor as CSSObject)}

      ${disabled &&
      css`
         border-color: ${theme.palette.disabled.borderColor};
         background-color: ${theme.palette.disabled.backgroundColor};
      `}
   `;
});

export const CheckBoxLabel = styled('span')<{
   theme: Theme;
   $disabled: boolean;
}>(({ theme, $disabled }) => ({
   color: $disabled ? theme.palette.disabled.color : theme.palette.common.black,
   userSelect: 'none',
   cursor: $disabled ? 'not-allowed' : 'pointer',
   transition: 'color 0.2s ease',
}));
