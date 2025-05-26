import styled from 'styled-components';

import { Theme } from '@/core';
import { sxConfig } from '@/core/styled';

import { SWITCH_CSS_VARIANT } from './constants';
import { SwitchStyledProps } from './switch.type';

export const SwitchLabel = styled.label<{
   $styleProps: Omit<
      SwitchStyledProps,
      'size' | 'color' | 'size' | 'unCheckedLabel' | 'checkedLabel' | 'defaultChecked' | 'color'
   >;
}>(({ $styleProps }) => {
   const { disabled, loading, ...resProps } = $styleProps;

   return {
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      userSelect: 'none',
      position: 'relative',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: 1,
      transition: 'opacity 0.3s ease',

      ...sxConfig(resProps),
   };
});

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })<{
   theme: Theme;
   $styleProps: Pick<SwitchStyledProps, 'color'>;
}>((props) => {
   const { theme, $styleProps } = props;

   const { color } = $styleProps;
   return {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      width: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',

      '&:focus + span': {
         boxShadow: `0 0 0 3px ${theme.palette[color].main}33`,
      },
   };
});

export const SwitchTrack = styled.span<{
   theme: Theme;
   $styleProps: Pick<SwitchStyledProps, 'checked' | 'size' | 'disabled' | 'color'>;
}>((props) => {
   const { theme, $styleProps } = props;
   const { checked, size, disabled, color } = $styleProps;

   const styleOverrides = theme.components?.PXSwitch?.styleOverrides;
   const { padding, thumbSize, trackHeight, trackWidth } = styleOverrides?.size[size] ?? SWITCH_CSS_VARIANT.size[size];

   // Dùng width chắc chắn lấy đúng
   const width = trackWidth ?? thumbSize * 2.5;

   return {
      display: 'inline-flex',
      alignItems: 'center',
      width,
      height: trackHeight,
      padding: padding,
      backgroundColor: disabled
         ? theme.palette.disabled.backgroundColor
         : checked
           ? theme.palette[color].main
           : 'rgba(0, 0, 0, 0.25)',
      borderRadius: 1000,
      position: 'relative',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: checked ? `0 0 6px ${theme.palette[color].main}33` : 'none', // nhẹ hơn, có alpha

      '&:not(:disabled):hover': {
         backgroundColor: !disabled && !checked ? 'rgba(0,0,0,0.35)' : undefined,
         boxShadow: !disabled && checked ? `0 0 8px ${theme.palette[color].main}66` : undefined,
      },
      '&:focus-visible': {
         outline: `2px solid ${theme.palette[color].main}33`,
         outlineOffset: 2,
      },

      border: `1px solid ${disabled ? theme.palette.disabled.borderColor : 'transparent'} `,

      userSelect: 'none',
   };
});

export const SwitchThumb = styled.span<{
   theme: Theme;
   $styleProps: Pick<SwitchStyledProps, 'checked' | 'disabled' | 'size'>;
}>((props) => {
   const { theme, $styleProps } = props;
   const { checked, size, disabled } = $styleProps;

   const styleOverrides = theme.components?.PXSwitch?.styleOverrides;
   const { padding, thumbSize, trackWidth } = styleOverrides?.size[size] ?? SWITCH_CSS_VARIANT.size[size];

   const width = trackWidth ?? thumbSize * 2.5;
   const moveDistance = width - thumbSize - padding * 2;

   return {
      boxSizing: 'border-box',
      position: 'absolute',
      top: '50%',
      left: checked ? 1 : 3,
      width: thumbSize,
      height: thumbSize,
      backgroundColor: disabled ? theme.palette.disabled.borderColor : theme.palette.common.white,
      borderRadius: '50%',
      transform: `translateX(${checked ? moveDistance : 0}px) translateY(-50%)`,
      transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'transform',
   };
});

export const SwitchTrackLabel = styled.span<{ theme: Theme }>(({ theme }) => ({
   verticalAlign: 'middle',
   fontSize: 14,
   fontWeight: 400,
   color: theme.palette.text.primary ?? '#333',
   userSelect: 'none',
   marginLeft: 8,
}));

export const SwitchLoadingSpinner = styled.span<{
   theme: Theme;
}>(({ theme }) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   width: '80%',
   height: '80%',
   transform: 'translate(-50%, -50%)',
   borderRadius: '50%',
   border: '2px solid transparent',
   borderTopColor: theme.palette.primary.main,
   animation: 'px-spin 0.6s linear infinite',
   zIndex: 1,

   '@keyframes px-spin': {
      to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
   },
}));
