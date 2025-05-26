import styled, { CSSObject } from 'styled-components';

import { Theme } from '@/core';
import { sxConfig } from '@/core/styled';

import { AvatarGroupStyleProps, AvatarStyledProps } from './avatar.type';
import { AVATAR_CSS_VARIANT } from './constants';

export const StyledAvatar = styled.div<{
   theme: Theme;
   $styleProps: Omit<AvatarStyledProps, 'badgeColor' | 'badgePosition' | 'showBadge'>;
}>(({ theme, $styleProps }) => {
   const { size, shape, ...resProps } = $styleProps;

   const { pixelSize, ...resCssVariant } = typeof size === 'string' ? (AVATAR_CSS_VARIANT.size[size] ?? {}) : {};

   const safePixelSize = typeof size === 'string' ? pixelSize && pixelSize : size;

   return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.gray[300],
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

      ...resCssVariant,

      ...sxConfig(resProps),
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
      backgroundColor: theme.palette[badgeColor]?.main ?? badgeColor,
      border: '0.5px solid white',
      borderRadius: '100%',
      ...placementStyle[badgePosition],
   };
});

export const StyledAvatarGroup = styled.div<{
   $styleProps: AvatarGroupStyleProps;
}>(({ $styleProps }) => {
   const { spacing, direction, ...resProps } = $styleProps;

   return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

      [`> *:not(:first-of-type)`]: {
         marginLeft: direction === 'ltr' ? -spacing : 0,
         marginRight: direction === 'rtl' ? -spacing : 0,
      },

      ...sxConfig(resProps),
   };
});
