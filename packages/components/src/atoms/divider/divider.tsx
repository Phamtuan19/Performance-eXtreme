import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { DividerRoot, DividerContent } from './divider.styled';
import type { PXComponentDivider, DividerProps } from './divider.type';

export const DIVIDER_DEFAULT_PROPS: PXComponentDivider['defaultProps'] = {
   orientation: 'horizontal',
   variant: 'fullWidth',
   textAlign: 'center',
};

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
   const theme = getTheme();
   const PXDivider = theme.components?.PXDivider?.defaultProps ?? {};

   const { className, sx, orientation, variant, textAlign, children, ...resProps } = merge(
      {},
      DIVIDER_DEFAULT_PROPS,
      PXDivider,
      props,
   );

   const hasChildren = Boolean(children);

   return (
      <DividerRoot
         ref={ref}
         className={cn('px-divider', className)}
         $styleProps={{ sx, orientation, variant, textAlign }}
         $hasChildren={hasChildren}
         role="separator"
         {...resProps}
      >
         {hasChildren && <DividerContent>{children}</DividerContent>}
      </DividerRoot>
   );
});

Divider.displayName = 'PXDivider';

export default Divider;
