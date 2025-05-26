import styled from 'styled-components';

import { Theme } from '@/core';
import { sxConfig } from '@/core/styled';

import { TooltipStyleProps } from './tooltip.type';

export const TooltipWrapper = styled('div')<{
   theme: Theme;
   $styleProps: Omit<TooltipStyleProps, 'delay' | 'arrow' | 'offset' | 'placement'>;
}>((props) => {
   const { theme, $styleProps } = props;

   const { color, ...resStyleProps } = $styleProps;

   return {
      position: 'absolute',
      zIndex: 9999,
      background: '#333',
      padding: '6px 10px',
      borderRadius: 4,
      fontSize: 14,
      whiteSpace: 'nowrap',
      transition: 'opacity 0.2s ease',
      backgroundColor: color === 'default' ? '#333' : (theme.palette[color]?.main ?? color),
      color: theme.palette[color]?.contrastText ?? theme.palette.common.white,

      ...sxConfig(resStyleProps),
   };
});

export const Arrow = styled('div')<{ theme: Theme; $styleProps: TooltipStyleProps }>((props) => {
   const { theme, $styleProps } = props;

   const { color } = $styleProps;

   return {
      position: 'absolute',
      width: 8,
      height: 8,
      background: color === 'default' ? '#333' : (theme.palette[color].main ?? color),
      transform: 'rotate(45deg)',
   };
});
