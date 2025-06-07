import React from 'react';

import { cn } from '@pui/core';

import type { ButtonBaseProps } from '../button.type';

import { ButtonBaseRoot } from './button-base.styled';

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
   const { children, className, sx, ...resProps } = props;

   // Placeholder for separateProps functionality
   const styleProps = { sx };
   const remainingProps = resProps;

   return (
      <ButtonBaseRoot
         ref={ref}
         {...remainingProps}
         className={cn(`px-buttonBase-root`, className)}
         $styleProps={styleProps}
      >
         {children}
      </ButtonBaseRoot>
   );
});

ButtonBase.displayName = 'PXButtonBase';

export { ButtonBase };
