import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { LabelRoot, LabelRequired } from './label.styled';
import type { PXComponentLabel, LabelProps } from './label.type';

export const LABEL_DEFAULT_PROPS: PXComponentLabel['defaultProps'] = {
   color: 'default',
   size: 'medium',
   required: false,
   disabled: false,
};

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
   const theme = getTheme();
   const PXLabel = theme.components?.PXLabel?.defaultProps ?? {};

   const { className, sx, color, size, required, disabled, children, ...resProps } = merge(
      {},
      LABEL_DEFAULT_PROPS,
      PXLabel,
      props,
   );

   return (
      <LabelRoot
         ref={ref}
         className={cn('px-label', className)}
         $styleProps={{ sx, color, size, required, disabled }}
         {...resProps}
      >
         {children}
         {required && <LabelRequired $styleProps={{ size }}>*</LabelRequired>}
      </LabelRoot>
   );
});

Label.displayName = 'PXLabel';

export default Label;
