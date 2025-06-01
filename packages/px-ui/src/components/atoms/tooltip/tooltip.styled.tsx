import styled from 'styled-components';

import type { Theme } from '@pui/material/core';

import type { TooltipStyleProps } from './tooltip.type';

// Hàm xử lý màu chung
const getBackgroundColor = (theme: Theme, color: string | undefined) => {
   if (!color || color === 'default') return '#333';
   return theme.palette[color]?.main ?? color;
};

const getTextColor = (theme: Theme, color: string | undefined) => {
   if (!color || color === 'default') return theme.palette.common.white;
   return theme.palette[color]?.contrastText ?? theme.palette.common.white;
};

export const TooltipWrapper = styled.div<{
   $styleProps: Omit<TooltipStyleProps, 'delay' | 'arrow' | 'offset' | 'placement'>;
}>(({ theme, $styleProps }) => {
   const { color = 'default', ...resStyleProps } = $styleProps;

   const bgColor = getBackgroundColor(theme, color);

   const textColor = getTextColor(theme, color);

   const styleOverrides = theme.components?.PXTooltip?.styleOverrides;

   const colorOverrides = styleOverrides?.color?.[color as keyof typeof styleOverrides.color];

   return {
      position: 'absolute',
      zIndex: theme.zIndex.tooltip,
      padding: '6px 10px',
      borderRadius: 4,
      fontSize: 14,
      whiteSpace: 'nowrap',
      transition: 'opacity 0.2s ease',
      backgroundColor: bgColor,
      color: textColor,
      ...colorOverrides,
      ...styleOverrides?.root,
      ...theme.sxConfig(resStyleProps),
   };
});

export const Arrow = styled.div({
   position: 'absolute',
   width: 8,
   height: 8,
   background: 'inherit',
   transform: 'rotate(45deg)',
});
