import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { SpinnerRoot, SpinnerCircular, SpinnerLinear } from './spinner.styled';
import type { PXComponentSpinner, SpinnerProps } from './spinner.type';

export const SPINNER_DEFAULT_PROPS: PXComponentSpinner['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   thickness: 4,
   variant: 'circular',
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
   const theme = getTheme();
   const PXSpinner = theme.components?.PXSpinner?.defaultProps ?? {};

   const { className, sx, color, size, thickness, variant, ...resProps } = merge(
      {},
      SPINNER_DEFAULT_PROPS,
      PXSpinner,
      props,
   );

   return (
      <SpinnerRoot
         ref={ref}
         className={cn('px-spinner', className)}
         $styleProps={{ sx, color, size, thickness, variant }}
         role="progressbar"
         {...resProps}
      >
         {variant === 'circular' && <SpinnerCircular $styleProps={{ color, size, thickness }} />}
         {variant === 'linear' && <SpinnerLinear $styleProps={{ color }} />}
      </SpinnerRoot>
   );
});

Spinner.displayName = 'PXSpinner';

export default Spinner;
