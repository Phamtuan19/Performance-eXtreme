import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { BoxStyled } from './box.styled';
import type { PXComponentBox, BoxProps } from './box.type';

export const BOX_DEFAULT_PROPS: PXComponentBox['defaultProps'] = {
   component: 'div',
};

const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
   const theme = getTheme();

   const PXBox = theme.components?.PXBox?.defaultProps;

   const { component, className, children, sx, ...resProps } = merge({}, BOX_DEFAULT_PROPS, PXBox, props);

   return (
      <BoxStyled
         ref={ref}
         as={component}
         className={cn('px-box', className)}
         $styleProps={{
            component,
            sx,
            ...resProps,
         }}
      >
         {children}
      </BoxStyled>
   );
});

Box.displayName = 'PXBox';

export default Box;
