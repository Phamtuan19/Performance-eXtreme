import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { RadioWrapper, RadioBoxContainer, InputRadio, RadioInner, RadioBoxLabel } from './radio.styled';
import type { PXComponentRadio, RadioProps } from './radio.type';

const RADIO_DEFAULT_PROPS: PXComponentRadio['defaultProps'] = {
   size: 'medium',
   color: 'primary',
   disabled: false,
   checked: false,
   defaultChecked: false,
   error: false,
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
   const theme = getTheme();

   const PXRadio = theme.components?.PXRadio?.defaultProps;

   const { label, sx, size, checked, defaultChecked, disabled, color, error, onChange, onKeyDown, ...resProps } = merge(
      {},
      RADIO_DEFAULT_PROPS,
      PXRadio,
      props,
   );

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
