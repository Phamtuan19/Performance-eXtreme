import { merge } from 'lodash';
import React, { useState } from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { CheckBoxContainer, CheckBoxInner, CheckBoxLabel, CheckBoxWrapper, InputCheckBox } from './checkbox.styled';
import type { CheckBoxProps, PXComponentCheckbox } from './checkbox.type';

const CHECKBOX_DEFAULT_PROPS: PXComponentCheckbox['defaultProps'] = {
   size: 'medium',
   color: 'primary',
   disabled: false,
   checked: false,
   defaultChecked: false,
   indeterminate: false,
   error: false,
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
   const theme = getTheme();
   const themeDefault = theme.components?.PXCheckBox?.defaultProps;
   const {
      label,
      sx,
      color,
      size,
      disabled,
      checked,
      defaultChecked,
      indeterminate,
      error,
      onChange,
      onKeyDown,
      ...restProps
   } = merge({}, CHECKBOX_DEFAULT_PROPS, themeDefault, props);

   const [internalChecked, setInternalChecked] = useState(defaultChecked);
   const isControlled = typeof checked === 'boolean';
   const isChecked = isControlled ? checked : internalChecked;

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      if (!isControlled) setInternalChecked(newChecked);
      onChange?.(newChecked, event);
   };

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (['Enter', ' '].includes(event.key)) {
         event.preventDefault();

         const newChecked = !isChecked;

         if (!isControlled) setInternalChecked(newChecked);
         onKeyDown?.(event);
      }
   };

   const { styleProps, remainingProps } = separateProps(restProps);

   return (
      <CheckBoxWrapper
         $styleProps={{
            ...styleProps,
            sx,
            color: error ? 'error' : color,
            disabled,
            checked: isChecked,
         }}
         className="px-checkbox-wrapper"
      >
         <CheckBoxContainer className="px-checkbox-container">
            <InputCheckBox
               ref={ref}
               type="checkbox"
               disabled={disabled}
               checked={isChecked}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               {...remainingProps}
               $styleProps={{ color: error ? 'error' : color }}
               className={cn('px-checkbox-input', {
                  'px-checkbox-input-indeterminate': indeterminate,
               })}
            />
            <CheckBoxInner
               $styleProps={{
                  disabled,
                  checked: isChecked,
                  size,
                  color: error ? 'error' : color,
                  indeterminate,
               }}
               className={cn('px-checkbox-inner', {
                  'px-checkbox-inner-indeterminate': indeterminate,
               })}
            />
         </CheckBoxContainer>

         {label && (
            <CheckBoxLabel className="px-checkbox-label" $disabled={disabled}>
               {label}
            </CheckBoxLabel>
         )}
      </CheckBoxWrapper>
   );
});

Checkbox.displayName = 'PXCheckBox';

export default Checkbox;
