import React, { useState } from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { CheckBoxContainer, CheckBoxInner, CheckBoxLabel, CheckBoxWrapper, InputCheckBox } from './checkbox.styled';
import { CheckBoxProps } from './checkbox.type';
import { CHECKBOX_DEFAULT_PROPS } from './constants';

const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
   const theme = getTheme();
   const themeDefault = theme.components?.PXCheckBox?.defaultProps ?? CHECKBOX_DEFAULT_PROPS;

   const {
      label,
      sx,
      color = themeDefault.color,
      size = themeDefault.size,
      disabled = themeDefault.disabled,
      checked,
      defaultChecked = themeDefault.defaultChecked ?? false,
      indeterminate = themeDefault.indeterminate,
      error = themeDefault.error,
      onChange,
      onKeyDown,
      ...restProps
   } = props;

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
         className="PXCheckBox-wrapper"
      >
         <CheckBoxContainer className="PXCheckBox-container">
            <InputCheckBox
               ref={ref}
               type="checkbox"
               disabled={disabled}
               checked={isChecked}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               {...remainingProps}
               $styleProps={{ color: error ? 'error' : color }}
               className={cn('PXCheckBox-input', {
                  'PXCheckBox-input-indeterminate': indeterminate,
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
               className={cn('PXCheckBox-inner', {
                  'PXCheckBox-inner-indeterminate': indeterminate,
               })}
            />
         </CheckBoxContainer>

         {label && (
            <CheckBoxLabel className="PXCheckBox-label" $disabled={disabled}>
               {label}
            </CheckBoxLabel>
         )}
      </CheckBoxWrapper>
   );
});

Checkbox.displayName = 'PXCheckBox';

export default Checkbox;
