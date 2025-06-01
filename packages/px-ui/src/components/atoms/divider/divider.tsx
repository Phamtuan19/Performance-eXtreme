import React from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { DividerRoot, DividerTextInner } from './divider.styled';
import type { DividerProps } from './divider.type';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
   const theme = getTheme();

   const PXDivider = theme.components?.PXDivider?.defaultProps;

   const {
      sx,
      variant = PXDivider?.variant ?? 'horizontal',
      color = PXDivider?.color ?? 'default',
      thickness = PXDivider?.thickness ?? 1,
      orientation = PXDivider?.orientation ?? 'center',
      children,
      className,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <DividerRoot
         {...remainingProps}
         className={cn('px-divider-container', className)}
         ref={ref}
         $styleProps={{
            ...styleProps,
            sx,
            variant,
            color,
            thickness,
            orientation,
            hasChildren: !!children,
         }}
      >
         {children && <DividerTextInner className="px-divider-text-inner">{children}</DividerTextInner>}
      </DividerRoot>
   );
});

Divider.displayName = 'PXDivider';

export default Divider;
