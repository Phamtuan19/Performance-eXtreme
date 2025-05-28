import React from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { DividerRoot, DividerTextInner } from './divider.styled';
import { DividerProps } from './divider.type';

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
         className={cn('PXDivider-container', className)}
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
         {children && <DividerTextInner className="PXDivider-text-inner">{children}</DividerTextInner>}
      </DividerRoot>
   );
});

Divider.displayName = 'PXDivider';

export default Divider;
