import styled from 'styled-components';

import type { Theme } from '@PUI/core';

import type { DividerStyledProps } from './divider.type';

export const DividerRoot = styled('div')<{
   theme: Theme;
   $styleProps: DividerStyledProps & { hasChildren: boolean };
}>((props) => {
   const { theme, $styleProps } = props;

   const { variant = 'horizontal', color, thickness, orientation, hasChildren } = $styleProps;
   const borderColor = color === 'default' ? theme.palette.disabled.borderColor : theme.palette[color]?.main;

   if (variant === 'vertical') {
      return {
         display: hasChildren ? 'flex' : 'inline-flex',
         alignItems: hasChildren ? 'center' : undefined,
         justifyContent: hasChildren
            ? orientation === 'left'
               ? 'flex-start'
               : orientation === 'right'
                 ? 'flex-end'
                 : 'center'
            : undefined,
         margin: '0 8px',
         position: 'relative',
         background: 'transparent',
         alignSelf: 'stretch',
         width: thickness,
         padding: hasChildren ? '0 8px' : 0,

         '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: thickness,
            backgroundColor: borderColor,
         },

         ...(hasChildren && {
            transform: 'rotate(-90deg)',
         }),
      };
   }

   // CHI NHÁNH HORIZONTAL
   const getFlex = (side: 'before' | 'after') => {
      if (orientation === 'center') return 1;
      if (orientation === 'left') return side === 'before' ? 0.1 : 1;
      if (orientation === 'right') return side === 'before' ? 1 : 0.1;
      return 1;
   };

   return {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: thickness,
      margin: '8px 0',
      background: 'transparent',
      alignSelf: 'stretch',

      '&::before': {
         content: '""',
         borderBlockStart: `${thickness}px solid ${borderColor}`,
         flex: hasChildren ? getFlex('before') : 1,
         marginRight: hasChildren ? '6px' : 0,
         transform: 'translateY(50%)',
      },
      ...(hasChildren && {
         '&::after': {
            content: '""',
            borderBlockStart: `${thickness}px solid ${borderColor}`,
            flex: getFlex('after'),
            marginLeft: '6px',
            transform: 'translateY(50%)',
         },
      }),
   };
});

export const DividerTextInner = styled('span')<{ theme: Theme }>(({ theme }) => {
   return {
      color: theme.palette.common.black,
      fontSize: 16,
      fontWeight: 500,
      padding: '0 12px',
   };
});
