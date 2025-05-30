import React from 'react';

import separateProps from '@PUI/core/styled/separate-props';
import { cn } from '@PUI/core/utils';

import type { ButtonBaseProps } from '../button.type';

import { ButtonBaseRoot } from './button-base.styled';

const CLASS_NAME = 'PXButtonBase';

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
   const { children, className, sx, ...resProps } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <ButtonBaseRoot
         ref={ref}
         {...remainingProps}
         className={cn(`${CLASS_NAME}__root`, className)}
         $styleProps={{ ...styleProps, sx }}
      >
         {children}
      </ButtonBaseRoot>
   );
});

ButtonBase.displayName = 'PXButtonBase';

export { ButtonBase };
