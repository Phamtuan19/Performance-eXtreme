import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { BoxStyle } from './box.styled';
import type { BoxProps } from './box.type';

const CLASS_NAME = 'PXBox';

const Box = (props: BoxProps) => {
   const { className, children, sx, component, ...rest } = props;

   const { styleProps, remainingProps } = separateProps(rest);

   return (
      <BoxStyle
         as={component}
         {...remainingProps}
         className={cn(`${CLASS_NAME}__wrapper`, className)}
         $styleProps={{ ...styleProps, sx }}
      >
         {children}
      </BoxStyle>
   );
};

Box.displayName = 'PXBox';

export default Box;
