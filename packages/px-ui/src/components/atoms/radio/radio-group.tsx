import React from 'react';

import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import Radio from './radio';
import { RadioGroupWrapper } from './radio.styled';
import type { RadioGroupProps, RadioProps } from './radio.type';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
   const {
      value: valueProp,
      defaultValue,
      onChange,
      name,
      disabled,
      error,
      direction = 'row',
      children,
      options,
      sx,
      size = 'medium',
      ...rest
   } = props;

   const { styleProps, remainingProps } = separateProps(rest);

   const [internalValue, setInternalValue] = React.useState(defaultValue);
   const isControlled = valueProp !== undefined;
   const value = isControlled ? valueProp : internalValue;

   const handleChange = (val: string, e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(val);
      onChange?.(val, e);
   };

   // Nếu có options thì tự render radio, còn không render children
   const radios = options
      ? options.map(({ label, value: optionValue, disabled: optionDisabled, ...resOption }, index) => (
           <Radio
              {...resOption}
              key={optionValue ?? index}
              value={optionValue}
              name={name}
              checked={value === optionValue}
              disabled={disabled || optionDisabled}
              error={error}
              onChange={
                 ((checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
                    if (checked && typeof optionValue === 'string') handleChange(optionValue, e);
                 }) as RadioProps['onChange']
              }
              size={size}
              label={label}
           />
        ))
      : React.Children.map(children, (child) => {
           if (!React.isValidElement(child)) return child;

           const element = child as React.ReactElement<RadioProps>;
           const childValue = element.props.value;

           return React.cloneElement(element, {
              name,
              checked: value === childValue,
              disabled: disabled || element.props.disabled,
              error,
              size,
              onChange: ((checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
                 if (checked && typeof childValue === 'string') handleChange(childValue, e);
                 element.props.onChange?.(checked, e);
              }) as RadioProps['onChange'],
           });
        });

   return (
      <RadioGroupWrapper
         ref={ref}
         role="radiogroup"
         $styleProps={{
            ...styleProps,
            sx,
            direction,
            disabled,
            error,
         }}
         className={cn('PXRadioGroup-wrapper')}
         {...remainingProps}
      >
         {radios}
      </RadioGroupWrapper>
   );
});

RadioGroup.displayName = 'PXRadioGroup';

export default RadioGroup;
