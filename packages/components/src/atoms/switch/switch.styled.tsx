import styled from 'styled-components';

import type { SwitchStyledProps } from './switch.type';

export const SwitchContainer = styled('label')<{
   $styleProps: Partial<SwitchStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium', disabled } = $styleProps;

   const sizeMap = {
      small: { width: '32px', height: '18px' },
      medium: { width: '44px', height: '24px' },
      large: { width: '56px', height: '30px' },
   };

   return {
      position: 'relative',
      display: 'inline-block',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...sizeMap[size],
   };
});

export const SwitchInput = styled('input')({
   opacity: 0,
   width: 0,
   height: 0,
   position: 'absolute',
});

export const SwitchTrack = styled('span')<{
   $styleProps: Partial<SwitchStyledProps>;
   $checked: boolean;
}>(({ theme, $styleProps, $checked }) => {
   const { color = 'primary', size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '32px', height: '18px', borderRadius: '9px' },
      medium: { width: '44px', height: '24px', borderRadius: '12px' },
      large: { width: '56px', height: '30px', borderRadius: '15px' },
   };

   return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: $checked ? theme.palette[color]?.main || theme.palette.primary.main : theme.palette.gray['300'],
      transition: 'all 0.2s ease',
      ...sizeMap[size],

      '&:hover': {
         backgroundColor: $checked
            ? theme.palette[color]?.dark || theme.palette.primary.dark
            : theme.palette.gray['400'],
      },
   };
});

export const SwitchThumb = styled('span')<{
   $styleProps: Partial<SwitchStyledProps>;
   $checked: boolean;
}>(({ theme, $styleProps, $checked }) => {
   const { size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '14px', height: '14px', transform: $checked ? 'translateX(16px)' : 'translateX(2px)' },
      medium: { width: '20px', height: '20px', transform: $checked ? 'translateX(22px)' : 'translateX(2px)' },
      large: { width: '26px', height: '26px', transform: $checked ? 'translateX(28px)' : 'translateX(2px)' },
   };

   return {
      position: 'absolute',
      top: '50%',
      transform: `translateY(-50%) ${sizeMap[size].transform}`,
      backgroundColor: theme.palette.common.white,
      borderRadius: '50%',
      transition: 'transform 0.2s ease',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      width: sizeMap[size].width,
      height: sizeMap[size].height,
   };
});
