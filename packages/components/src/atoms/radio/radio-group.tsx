import React, { useState } from 'react';

import { cn } from '@pui/core';

import { RadioGroupRoot } from './radio.styled';
import type { RadioGroupProps, RadioProps } from './radio.type';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
   const { children, value: valueProp, defaultValue, onChange, name, className, ...resProps } = props;

   const [internalValue, setInternalValue] = useState(defaultValue ?? '');
   const value = valueProp !== undefined ? valueProp : internalValue;

   const handleChange = (newValue: string) => {
      if (valueProp === undefined) {
         setInternalValue(newValue);
      }
      onChange?.(newValue);
   };

   const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement<RadioProps>(child)) {
         return React.cloneElement(child, {
            name: name || child.props.name,
            checked: child.props.value === value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
               child.props.onChange?.(event);
               if (child.props.value !== undefined) {
                  handleChange(child.props.value);
               }
            },
         });
      }
      return child;
   });

   return (
      <RadioGroupRoot ref={ref} className={cn('px-radio-group', className)} {...resProps}>
         {childrenWithProps}
      </RadioGroupRoot>
   );
});

RadioGroup.displayName = 'PXRadioGroup';

export default RadioGroup;
