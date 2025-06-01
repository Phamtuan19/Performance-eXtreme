import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import type { Palette, Theme } from '@pui/material/core';

import type { BadgeStyledProps } from './badge.type';

const getAnimationPresets = (
   animationType: BadgeStyledProps['animationType'],
   badgePosition: BadgeStyledProps['badgePosition'],
   palette: Palette,
   color: BadgeStyledProps['color'],
): CSSObject => {
   if (animationType === 'none') return {};

   const baseTranslate = {
      'top-left': 'var(--px-translate-top-left)',
      'top-right': 'var(--px-translate-top-right)',
      'bottom-left': 'var(--px-translate-bottom-left)',
      'bottom-right': 'var(--px-translate-bottom-right)',
   }[badgePosition ?? 'top-right'];

   switch (animationType) {
      case 'pulse':
         return {
            animation: 'px-badge-pulse 1.5s ease-in-out infinite',
            '@keyframes px-badge-pulse': {
               '0%': { transform: `${baseTranslate} scale(1)` },
               '50%': { transform: `${baseTranslate} scale(1.15)` },
               '100%': { transform: `${baseTranslate} scale(1)` },
            },
         };

      case 'bounce':
         return {
            animation: 'px-badge-bounce 0.8s ease infinite',
            '@keyframes px-badge-bounce': {
               '0%, 100%': { transform: `${baseTranslate} scale(1)` },
               '50%': {
                  transform: `${baseTranslate.replace(/-?\d+%/, (match) => {
                     const percent = parseInt(match, 10);
                     return percent - 10 + '%';
                  })} scale(1.2)`,
               },
            },
         };
      case 'wave':
         return {
            position: 'absolute',
            '&::after': {
               content: "''",
               position: 'absolute',
               inset: 0,
               borderRadius: '50%',
               boxShadow: `0 0 0 0 ${palette[color].main ?? color}`,
               animation: 'px-badge-wave 1.2s infinite',
               zIndex: -1,
            },
            '@keyframes px-badge-wave': {
               '0%': {
                  transform: 'scale(1)',
                  opacity: 0.6,
                  boxShadow: `0 0 0 0 ${palette[color]?.main ?? color}`,
               },
               '70%': { transform: 'scale(2.5)', opacity: 0, boxShadow: `0 0 0 1.5px transparent` },
               '100%': { transform: 'scale(1)', opacity: 0 },
            },
         };
      case 'wave-multi':
         return {
            '&::before, &::after, & span.PXBadge-wave-third': {
               content: "''",
               position: 'absolute',
               inset: 0,
               borderRadius: '50%',
               zIndex: -1,
               boxShadow: `0 0 0 0 ${palette[color]?.main ?? color}`,
               animation: 'px-badge-wave 1.6s ease-out infinite',
            },
            '&::after': {
               animationDelay: '0.5s',
            },
            '& span.wave-third': {
               animationDelay: '1s',
            },
            '@keyframes px-badge-wave': {
               '0%': {
                  transform: 'scale(1)',
                  opacity: 0.6,
                  boxShadow: `0 0 0 0 ${palette[color]?.main ?? color}`,
               },
               '70%': {
                  transform: 'scale(2.5)',
                  opacity: 0,
                  boxShadow: `0 0 0 3px transparent`,
               },
               '100%': {
                  transform: 'scale(1)',
                  opacity: 0,
               },
            },
         };

      default:
         return {};
   }
};

export const BadgeContainer = styled('span')<{
   theme: Theme;
   $styledProps: Omit<BadgeStyledProps, 'animationType' | 'badgePosition' | 'color' | 'dot'>;
}>((props) => {
   const { theme, $styledProps } = props;

   return {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'inline-flex',
      width: 'max-content',
      height: 'max-content',

      ...theme.sxConfig($styledProps),
   };
});

const placementStyle: Record<string, CSSObject> = {
   'top-left': { top: 0, left: 0, transform: 'var(--px-translate-top-left)' },
   'top-right': { top: 0, right: 0, transform: 'var(--px-translate-top-right)' },
   'bottom-left': { bottom: 0, left: 0, transform: 'var(--px-translate-bottom-left)' },
   'bottom-right': { bottom: 0, right: 0, transform: 'var(--px-translate-bottom-right)' },
};

export const BadgeContent = styled('sup')<{
   theme: Theme;
   $styledProps: Pick<BadgeStyledProps, 'animationType' | 'badgePosition' | 'color' | 'dot'> & {
      multipleWord: boolean;
   };
}>((props) => {
   const { theme, $styledProps } = props;
   const { dot, color, badgePosition, animationType, multipleWord } = $styledProps;

   const styleOverrides = theme.components?.PXBadge?.styleOverrides;

   return {
      boxSizing: 'border-box',
      position: 'absolute',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: dot ? 8 : 20,
      width: 'max-content',
      padding: multipleWord ? '0 8px' : 0,
      height: dot ? 8 : 20,
      fontSize: 12,
      fontWeight: 'normal',
      textAlign: 'center',
      color: theme.palette.common.white,
      backgroundColor: theme.palette[color]?.main ?? color,
      border: `1px solid ${theme.palette.common.white}`,
      borderRadius: 1000,
      transformOrigin: 'top right',
      boxShadow: `0 0 0 1px ${theme.palette.common.white}`,
      zIndex: 1,

      ...placementStyle[badgePosition],

      ...getAnimationPresets(animationType, badgePosition, theme.palette, color),

      ...styleOverrides?.root,

      ...styleOverrides?.color,
   };
});
