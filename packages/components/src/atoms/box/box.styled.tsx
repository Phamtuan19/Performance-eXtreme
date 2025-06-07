import React from 'react';
import styled from 'styled-components';

import type { BoxStyledProps } from './box.type';

// Forward ref để hỗ trợ styled-component
const BoxForwardRef = React.forwardRef<HTMLElement, { as?: React.ElementType } & React.ComponentPropsWithoutRef<'div'>>(
   ({ as: Component = 'div', ...rest }, ref) => <Component ref={ref} {...rest} />,
);
BoxForwardRef.displayName = 'BoxForwardRef';

export const BoxStyled = styled(BoxForwardRef)<{
   $styleProps: BoxStyledProps;
}>(({ theme, $styleProps }) => {
   const {
      display,
      flexDirection,
      justifyContent,
      alignItems,
      gap,
      p,
      padding = p,
      m,
      margin = m,
      width,
      height,
      background,
      backgroundColor = background,
      sx,
      ...restProps
   } = $styleProps;

   return {
      display,
      flexDirection,
      justifyContent,
      alignItems,
      gap: typeof gap === 'number' ? `${gap * 8}px` : gap,
      padding: typeof padding === 'number' ? `${padding * 8}px` : padding,
      margin: typeof margin === 'number' ? `${margin * 8}px` : margin,
      width,
      height,
      backgroundColor,

      // Custom sx styles
      ...sx,
   };
});
