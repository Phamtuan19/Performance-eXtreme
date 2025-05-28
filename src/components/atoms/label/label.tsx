import React from 'react';

import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { LabelContainer } from './label.styled';
import { LabelProps } from './label.type';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
   const { sx, children, required = false, disabled = false, requiredColor, className, ...resProps } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <LabelContainer
         ref={ref}
         {...remainingProps}
         className={cn('px-label', className)}
         $styleProps={{ ...styleProps, sx, required, disabled, requiredColor }}
      >
         {children}
      </LabelContainer>
   );
});

Label.displayName = 'PXLabel';

export default Label;
