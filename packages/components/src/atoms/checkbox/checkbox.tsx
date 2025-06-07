import { merge } from 'lodash';
import React, { useState } from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { CheckboxRoot, CheckboxInput, CheckboxBox, CheckboxIcon, CheckboxLabel } from './checkbox.styled';
import type { PXComponentCheckbox, CheckboxProps } from './checkbox.type';

export const CHECKBOX_DEFAULT_PROPS: PXComponentCheckbox['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   disabled: false,
   checked: false,
   indeterminate: false,
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
   const theme = getTheme();
   const PXCheckbox = theme.components?.PXCheckbox?.defaultProps ?? {};

   const {
      className,
      sx,
      color,
      size,
      disabled,
      checked: checkedProp,
      defaultChecked,
      indeterminate,
      label,
      onChange,
      ...resProps
   } = merge({}, CHECKBOX_DEFAULT_PROPS, PXCheckbox, props);

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
      <CheckboxRoot
         className={cn('px-checkbox', className)}
         $styleProps={{ sx, color, size, disabled, checked, indeterminate }}
      >
         <CheckboxInput
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
            {...resProps}
         />
         <CheckboxBox $styleProps={{ color, size, disabled }} $checked={checked} $indeterminate={indeterminate}>
            <CheckboxIcon $styleProps={{ size }} $checked={checked} $indeterminate={indeterminate} />
         </CheckboxBox>
         {label && <CheckboxLabel $styleProps={{ size }}>{label}</CheckboxLabel>}
      </CheckboxRoot>
   );
});

Checkbox.displayName = 'PXCheckbox';

export default Checkbox;
