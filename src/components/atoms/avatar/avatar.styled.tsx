import { merge } from 'lodash';
import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import { type Theme } from '@PUI/core';
import { isThemeColor } from '@PUI/core/utils';

import type { AvatarGroupStyleProps, AvatarStyledProps, PXComponentAvatar } from './avatar.type';

const AVATAR_CSS_VARIANT: PXComponentAvatar['styleOverrides'] = {
   root: {},
   size: {
      small: {
         pixelSize: 32,
      },
      medium: {
         pixelSize: 40,
      },
      large: {
         pixelSize: 64,
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

function getThemeColor(theme: Theme, color: string): string {
   if (color === 'default') return theme.palette.gray[300];
   if (isThemeColor(color)) return theme.palette[color].main;
   return color;
}

export const StyledAvatar = styled.div<{
   theme: Theme;
   $styleProps: Omit<AvatarStyledProps, 'badgeColor' | 'badgePosition' | 'showBadge'>;
}>(({ theme, $styleProps }) => {
   const { styleOverrides } = theme.components.PXAvatar ?? {};

   const { size, shape, color, ...resProps } = $styleProps;

   const { pixelSize, ...resCssVariant } =
      typeof size === 'string' ? merge({}, AVATAR_CSS_VARIANT.size[size], styleOverrides?.size?.[size]) : {};

   const safePixelSize = typeof size === 'string' ? pixelSize && pixelSize : size;

   return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: getThemeColor(theme, color),
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.common.white}`,
      fontWeight: 500,
      userSelect: 'none',
      width: safePixelSize,
      height: safePixelSize,
      borderRadius: shape === 'circle' ? '100%' : '15%',
      fontSize: Math.floor(safePixelSize! / 2.5),

      img: {
         width: '100%',
         height: '100%',
         objectFit: 'cover',
         display: 'block',
         borderRadius: shape === 'circle' ? '100%' : '15%',
      },

      '&:focus-visible': {
         outline: `2px solid ${theme.palette.primary.main}`,
         outlineOffset: 1,
      },

      ...styleOverrides?.root,

      ...resCssVariant,

      ...(styleOverrides?.color && typeof color === 'string' && color in styleOverrides.color
         ? styleOverrides.color[color as keyof typeof styleOverrides.color]
         : {}),

      ...theme.sxConfig(resProps),
   };
});

const placementStyle: Record<string, CSSObject> = {
   'top-left': { top: 0, left: 0, transform: 'translate(-50%, -50%)' },
   'top-right': { top: 0, right: 0, transform: 'translate(50%, -50%)' },
   'bottom-left': { bottom: 0, left: 0, transform: 'translate(-50%, 50%)' },
   'bottom-right': { bottom: 0, right: 0, transform: 'translate(50%, 50%)' },
};

export const Badge = styled.span<{
   theme: Theme;
   $styleProps: Pick<AvatarStyledProps, 'badgeColor' | 'badgePosition'>;
}>(({ theme, $styleProps }) => {
   const { badgeColor, badgePosition } = $styleProps;
   return {
      position: 'absolute',
      width: '0.5em',
      height: '0.5em',
      backgroundColor: getThemeColor(theme, badgeColor),
      border: '0.5px solid white',
      borderRadius: '100%',
      ...placementStyle[badgePosition],
   };
});

export const StyledAvatarGroup = styled.div<{
   $styleProps: Omit<AvatarGroupStyleProps, 'size' | 'shape'>;
}>(({ theme, $styleProps }) => {
   const { spacing, direction, ...resProps } = $styleProps;

   const isRTL = direction === 'rtl';

   return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      overflow: 'visible',

      // child avatar xử lý overlay
      '& > *': {
         position: 'relative',
         zIndex: 1,
         transition: 'margin 0.2s ease, z-index 0.2s ease, transform 0.2s ease',
         willChange: 'transform',
      },

      '& > *:not(:first-of-type)': {
         marginLeft: isRTL ? 0 : -spacing,
         marginRight: isRTL ? -spacing : 0,
      },

      // Hiệu ứng nổi bật khi tương tác
      '& > *:hover, & > *:focus-visible, & > *:active': {
         cursor: 'pointer',
         zIndex: 10,
         marginTop: -8,
         transform: 'scale(1.1)',
         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },

      ...theme.sxConfig(resProps),
   };
});
