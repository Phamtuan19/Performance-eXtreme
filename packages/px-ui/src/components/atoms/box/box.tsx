import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { BoxStyle } from './box.styled';
import type { BoxProps } from './box.type';

const Box = (props: BoxProps) => {
   const { className, children, sx, component = 'div', ...rest } = props;

   const { styleProps, remainingProps } = separateProps(rest);

   return (
      <BoxStyle
         as={component as keyof JSX.IntrinsicElements}
         {...remainingProps}
         className={cn('px-box-wrapper', className)}
         $styleProps={{ ...styleProps, ...(sx ? { sx } : {}) }}
      >
         {children}
      </BoxStyle>
   );
};

Box.displayName = 'PXBox';

export default Box;
