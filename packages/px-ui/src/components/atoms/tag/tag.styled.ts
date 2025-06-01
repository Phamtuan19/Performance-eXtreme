import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import type { Theme } from '@pui/material/core';

import type { TagStyledProps } from './tag.type';

const sizeStyles: Record<Exclude<ThemeSize, 'large'>, CSSObject> = {
   small: {
      fontSize: '12px',
      padding: '0 6px',
      height: '24px',
   },
   medium: {
      fontSize: '14px',
      padding: '0 12px',
      height: '32px',
   },
};

export const TagContainer = styled.span<{ theme: Theme; $styleProps: TagStyledProps }>(({ theme, $styleProps }) => {
   const { color, size, variant, ...resProps } = $styleProps;

   const variantStyle =
      variant === 'filled'
         ? {
              backgroundColor: theme.palette?.[color].main,
              color: theme.palette?.[color].contrastText,
              border: 'none',
           }
         : {
              backgroundColor: 'transparent',
              color: theme.palette?.[color].main,
              border: `1px solid ${theme.palette?.[color].main}`,
           };

   return {
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      overflow: 'hidden',
      borderRadius: 12,
      fontWeight: 500,
      cursor: 'default',

      ...sizeStyles[size],

      ...variantStyle,

      ...theme.sxConfig(resProps),
   };
});

export const DeleteIcon = styled.span<{ theme: Theme; $styleProps: Pick<TagStyledProps, 'color' | 'variant'> }>(
   ({ theme, $styleProps }) => {
      return {
         boxSizing: 'border-box',
         display: 'inline-flex',
         alignItems: 'center',
         justifyContent: 'center',
         width: 'fit-content',
         height: 'fit-content',
         borderRadius: '100%',
         cursor: 'pointer',
         transition: 'fill 0.25s ease-in-out',

         '& .px-icon-close': {
            transition: 'fill 0.25s ease-in-out',
            fill:
               $styleProps.variant === 'outline' ? theme.palette[$styleProps.color].light : theme.palette.common.black,

            '&:hover': {
               fill:
                  $styleProps.variant === 'outline'
                     ? theme.palette[$styleProps.color].dark
                     : theme.palette.common.white,
            },
         },
      };
   },
);
