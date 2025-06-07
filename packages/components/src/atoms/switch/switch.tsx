import { merge } from 'lodash';
import React, { useState } from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { SwitchContainer, SwitchInput, SwitchTrack, SwitchThumb } from './switch.styled';
import type { PXComponentSwitch, SwitchProps } from './switch.type';

export const SWITCH_DEFAULT_PROPS: PXComponentSwitch['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   disabled: false,
   checked: false,
};

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
   const theme = getTheme();
   const PXSwitch = theme.components?.PXSwitch?.defaultProps ?? {};

   const {
      className,
      sx,
      disabled,
      checked: checkedProp,
      defaultChecked,
      size,
      color,
      onChange,
      ...resProps
   } = merge({}, SWITCH_DEFAULT_PROPS, PXSwitch, props);

   const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
   const checked = checkedProp !== undefined ? checkedProp : internalChecked;

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const newChecked = event.target.checked;
      if (checkedProp === undefined) {
         setInternalChecked(newChecked);
      }
      onChange?.(event);
   };

   return (
      <SwitchContainer className={cn('px-switch', className)} $styleProps={{ sx, size, color, disabled, checked }}>
         <SwitchInput
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            {...resProps}
         />
         <SwitchTrack $styleProps={{ size, color, disabled }} $checked={checked} />
         <SwitchThumb $styleProps={{ size, color, disabled }} $checked={checked} />
      </SwitchContainer>
   );
});

Switch.displayName = 'PXSwitch';

export default Switch;
