import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { BoxStyle } from './box.styled';
import type { BoxProps } from './box.type';

const Box = (props: BoxProps) => {
   const { className, children, sx, component, ...rest } = props;

   const { styleProps, remainingProps } = separateProps(rest);

   return (
      <BoxStyle
         as={component}
         {...remainingProps}
         className={cn('px-box-wrapper', className)}
         $styleProps={{ ...styleProps, sx }}
      >
         {children}
      </BoxStyle>
   );
};

Box.displayName = 'PXBox';

export default Box;
