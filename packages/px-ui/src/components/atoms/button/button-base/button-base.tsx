import React from 'react';

import separateProps from '@pui/material/core/styled/separate-props';
import { cn } from '@pui/material/core/utils';

import type { ButtonBaseProps } from '../button.type';

import { ButtonBaseRoot } from './button-base.styled';

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
   const { children, className, sx, ...resProps } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <ButtonBaseRoot
         ref={ref}
         {...remainingProps}
         className={cn(`px-buttonBase-root`, className)}
         $styleProps={{ ...styleProps, sx }}
      >
         {children}
      </ButtonBaseRoot>
   );
});

ButtonBase.displayName = 'PXButtonBase';

export { ButtonBase };
