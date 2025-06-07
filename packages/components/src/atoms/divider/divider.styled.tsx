import styled from 'styled-components';

import type { DividerStyledProps } from './divider.type';

export const DividerRoot = styled('div')<{
   $styleProps: Partial<DividerStyledProps>;
   $hasChildren: boolean;
}>(({ theme, $styleProps, $hasChildren }) => {
   const { orientation = 'horizontal', variant = 'fullWidth', textAlign = 'center' } = $styleProps;

   const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      backgroundColor: 'transparent',
   };

   if (orientation === 'vertical') {
      return {
         ...baseStyles,
         flexDirection: 'column',
         height: '100%',
         width: '1px',
         minHeight: '24px',
         '&::before': {
            content: '""',
            flex: 1,
            borderLeft: `1px solid ${theme.palette.gray['300']}`,
         },
      };
   }

   // Horizontal divider
   const marginMap = {
      fullWidth: { margin: 0 },
      inset: { marginLeft: '72px' },
      middle: { margin: '0 16px' },
   };

   if ($hasChildren) {
      return {
         ...baseStyles,
         width: '100%',
         textAlign,
         color: theme.palette.gray['600'],
         fontSize: '14px',

         '&::before, &::after': {
            content: '""',
            flex: 1,
            borderTop: `1px solid ${theme.palette.gray['300']}`,
         },

         '&::before': {
            marginRight: textAlign === 'left' ? '8px' : '16px',
         },

         '&::after': {
            marginLeft: textAlign === 'right' ? '8px' : '16px',
         },

         ...(textAlign === 'left' && {
            '&::before': { flex: '0 0 16px' },
         }),

         ...(textAlign === 'right' && {
            '&::after': { flex: '0 0 16px' },
         }),

         ...marginMap[variant],
      };
   }

   return {
      ...baseStyles,
      width: '100%',
      height: '1px',
      backgroundColor: theme.palette.gray['300'],
      ...marginMap[variant],
   };
});

export const DividerContent = styled('span')({
   padding: '0 8px',
   whiteSpace: 'nowrap',
});
