import styled from 'styled-components';

import type { AvatarStyledProps, AvatarGroupStyledProps } from './avatar.type';

export const AvatarRoot = styled('div')<{
   $styleProps: Partial<AvatarStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium', color = 'primary', variant = 'circular' } = $styleProps;

   const sizeMap = {
      small: { width: '32px', height: '32px', fontSize: '14px' },
      medium: { width: '40px', height: '40px', fontSize: '16px' },
      large: { width: '48px', height: '48px', fontSize: '18px' },
   };

   const borderRadiusMap = {
      circular: '50%',
      square: '0',
      rounded: '8px',
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette[color]?.main || theme.palette.primary.main,
      color: theme.palette[color]?.contrastText || theme.palette.primary.contrastText,
      fontWeight: 500,
      borderRadius: borderRadiusMap[variant],
      ...sizeMap[size],
   };
});

export const AvatarImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   display: 'block',
});

export const AvatarFallback = styled('div')({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: '100%',
   fontSize: 'inherit',
   fontWeight: 'inherit',
   textTransform: 'uppercase',
});

export const AvatarGroupRoot = styled('div')<{
   $styleProps: Partial<AvatarGroupStyledProps>;
}>(({ $styleProps }) => {
   return {
      display: 'flex',
      alignItems: 'center',
      '& > *:not(:first-child)': {
         marginLeft: '-8px',
      },
   };
});

export const AvatarGroupSurplus = styled('div')<{
   $styleProps: Partial<AvatarGroupStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '32px', height: '32px', fontSize: '12px' },
      medium: { width: '40px', height: '40px', fontSize: '14px' },
      large: { width: '48px', height: '48px', fontSize: '16px' },
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.gray['300'],
      color: theme.palette.gray['700'],
      borderRadius: '50%',
      fontWeight: 500,
      border: '2px solid white',
      ...sizeMap[size],
   };
});
