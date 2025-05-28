import React from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { RADIO_DEFAULT_PROPS } from './constants';
import { RadioWrapper, RadioBoxContainer, InputRadio, RadioInner, RadioBoxLabel } from './radio.styled';
import { RadioProps } from './radio.type';

/**
 * Component Radio sử dụng cho hệ thống PX UI.
 * Hỗ trợ cả controlled và uncontrolled.
 */
const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
   const theme = getTheme();

   const PXRadio = theme.components?.PXRadio?.defaultProps ?? RADIO_DEFAULT_PROPS;

   const {
      label,
      sx,
      size = PXRadio.size,
      checked,
      defaultChecked = PXRadio.defaultChecked,
      disabled = PXRadio.disabled,
      color = PXRadio.color,
      error = PXRadio.error,
      onChange,
      onKeyDown,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
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

   return (
      <RadioWrapper
         $styleProps={{
            ...styleProps,
            sx,
            color: error ? 'error' : color,
            disabled,
            checked: isChecked,
         }}
         className="PXRadio-wrapper"
      >
         <RadioBoxContainer className="PXRadio-container">
            <InputRadio
               ref={ref}
               disabled={disabled}
               checked={isChecked}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               className={cn('PXRadio-input', {
                  'PXRadio-input-disabled': disabled,
               })}
               $styleProps={{ color: error ? 'error' : color }}
               {...remainingProps}
            />

            <RadioInner $styleProps={{ size, color: error ? 'error' : color, checked: isChecked, disabled }} />
         </RadioBoxContainer>

         {label && (
            <RadioBoxLabel
               className={cn('PXRadio-label', {
                  'PXRadio-label-disabled': disabled,
               })}
               $disabled={disabled}
            >
               {label}
            </RadioBoxLabel>
         )}
      </RadioWrapper>
   );
});

Radio.displayName = 'PXRadio';

export default Radio;
