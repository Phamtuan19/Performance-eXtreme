import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { RadioRoot, RadioInput, RadioCircle, RadioDot, RadioLabel } from './radio.styled';
import type { PXComponentRadio, RadioProps } from './radio.type';

export const RADIO_DEFAULT_PROPS: PXComponentRadio['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   disabled: false,
   checked: false,
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
   const theme = getTheme();
   const PXRadio = theme.components?.PXRadio?.defaultProps ?? {};

   const { className, sx, color, size, disabled, checked, label, ...resProps } = merge(
      {},
      RADIO_DEFAULT_PROPS,
      PXRadio,
      props,
   );

   return (
      <RadioRoot className={cn('px-radio', className)} $styleProps={{ sx, color, size, disabled, checked }}>
         <RadioInput ref={ref} type="radio" checked={checked} disabled={disabled} {...resProps} />
         <RadioCircle $styleProps={{ color, size, disabled }} $checked={checked}>
            <RadioDot $styleProps={{ color, size }} $checked={checked} />
         </RadioCircle>
         {label && <RadioLabel $styleProps={{ size }}>{label}</RadioLabel>}
      </RadioRoot>
   );
});

Radio.displayName = 'PXRadio';

export default Radio;
