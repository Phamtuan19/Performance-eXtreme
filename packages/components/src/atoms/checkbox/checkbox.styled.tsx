import styled from 'styled-components';

import type { CheckboxStyledProps } from './checkbox.type';

export const CheckboxRoot = styled('label')<{
   $styleProps: Partial<CheckboxStyledProps>;
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

export const CheckboxInput = styled('input')({
   position: 'absolute',
   opacity: 0,
   width: 0,
   height: 0,
   margin: 0,
   padding: 0,
});

export const CheckboxBox = styled('div')<{
   $styleProps: Partial<CheckboxStyledProps>;
   $checked: boolean;
   $indeterminate: boolean;
}>(({ theme, $styleProps, $checked, $indeterminate }) => {
   const { color = 'primary', size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '16px', height: '16px' },
      medium: { width: '20px', height: '20px' },
      large: { width: '24px', height: '24px' },
   };

   const isActive = $checked || $indeterminate;

   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${
         isActive ? theme.palette[color]?.main || theme.palette.primary.main : theme.palette.gray['300']
      }`,
      backgroundColor: isActive ? theme.palette[color]?.main || theme.palette.primary.main : 'transparent',
      borderRadius: '4px',
      transition: 'all 0.2s ease',
      ...sizeMap[size],

      '&:hover': {
         borderColor: theme.palette[color]?.dark || theme.palette.primary.dark,
         backgroundColor: isActive
            ? theme.palette[color]?.dark || theme.palette.primary.dark
            : theme.palette.gray['50'],
      },
   };
});

export const CheckboxIcon = styled('div')<{
   $styleProps: Partial<CheckboxStyledProps>;
   $checked: boolean;
   $indeterminate: boolean;
}>(({ theme, $styleProps, $checked, $indeterminate }) => {
   const { size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { width: '10px', height: '10px' },
      medium: { width: '12px', height: '12px' },
      large: { width: '14px', height: '14px' },
   };

   if ($indeterminate) {
      return {
         ...sizeMap[size],
         height: '2px',
         backgroundColor: theme.palette.common.white,
         borderRadius: '1px',
      };
   }

   if ($checked) {
      return {
         ...sizeMap[size],
         '&::after': {
            content: '""',
            display: 'block',
            width: '4px',
            height: '8px',
            border: `2px solid ${theme.palette.common.white}`,
            borderTop: 'none',
            borderLeft: 'none',
            transform: 'rotate(45deg)',
            marginTop: '-2px',
            marginLeft: '1px',
         },
      };
   }

   return {
      display: 'none',
   };
});

export const CheckboxLabel = styled('span')<{
   $styleProps: Partial<CheckboxStyledProps>;
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
