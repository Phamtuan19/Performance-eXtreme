import styled from 'styled-components';

import type { RadioStyledProps } from './radio.type';

export const RadioRoot = styled('label')<{
   $styleProps: Partial<RadioStyledProps>;
}>(({ theme, $styleProps }) => {
   const { disabled } = $styleProps;

   return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      position: 'relative',
      userSelect: 'none',
   };
});

export const RadioInput = styled('input')({
   position: 'absolute',
   opacity: 0,
   width: 0,
   height: 0,
   margin: 0,
   padding: 0,
});

export const RadioCircle = styled('div')<{
   $styleProps: Partial<RadioStyledProps>;
   $checked: boolean;
}>(({ theme, $styleProps, $checked }) => {
   const { color = 'primary', size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '16px', height: '16px' },
      medium: { width: '20px', height: '20px' },
      large: { width: '24px', height: '24px' },
   };

   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${
         $checked ? theme.palette[color]?.main || theme.palette.primary.main : theme.palette.gray['300']
      }`,
      borderRadius: '50%',
      transition: 'all 0.2s ease',
      ...sizeMap[size],

      '&:hover': {
         borderColor: theme.palette[color]?.dark || theme.palette.primary.dark,
         backgroundColor: $checked ? 'transparent' : theme.palette.gray['50'],
      },
   };
});

export const RadioDot = styled('div')<{
   $styleProps: Partial<RadioStyledProps>;
   $checked: boolean;
}>(({ theme, $styleProps, $checked }) => {
   const { color = 'primary', size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '6px', height: '6px' },
      medium: { width: '8px', height: '8px' },
      large: { width: '10px', height: '10px' },
   };

   return {
      borderRadius: '50%',
      backgroundColor: theme.palette[color]?.main || theme.palette.primary.main,
      transform: $checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform 0.2s ease',
      ...sizeMap[size],
   };
});

export const RadioLabel = styled('span')<{
   $styleProps: Partial<RadioStyledProps>;
}>(({ theme, $styleProps }) => {
   const { size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { fontSize: '14px' },
      medium: { fontSize: '16px' },
      large: { fontSize: '18px' },
   };

   return {
      color: theme.palette.gray['700'],
      lineHeight: 1.4,
      ...sizeMap[size],
   };
});

export const RadioGroupRoot = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '8px',
});
