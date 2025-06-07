import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useOnClickOutside } from '@pui/core';
import { Spinner } from '../spinner';
import type { SelectProps, SelectOption } from './select.type';
import {
   SelectRoot,
   SelectControl,
   SelectValue,
   SelectIcon,
   SelectDropdown,
   SelectOption as StyledSelectOption,
   SelectHelperText,
   SelectLoadingOption,
   SelectEmptyOption,
} from './select.styled';

// Simple ChevronDown icon component
const ChevronDownIcon = () => (
   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M7 10l5 5 5-5z" />
   </svg>
);

export const SELECT_DEFAULT_PROPS: Required<
   Pick<
      SelectProps,
      | 'variant'
      | 'color'
      | 'size'
      | 'disabled'
      | 'error'
      | 'fullWidth'
      | 'multiple'
      | 'clearable'
      | 'searchable'
      | 'loading'
      | 'maxHeight'
   >
> = {
   variant: 'outline',
   color: 'primary',
   size: 'medium',
   disabled: false,
   error: false,
   fullWidth: false,
   multiple: false,
   clearable: false,
   searchable: false,
   loading: false,
   maxHeight: 200,
};

export const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
   const {
      value,
      defaultValue,
      placeholder = 'Select an option',
      options = [],
      onChange,
      disabled = SELECT_DEFAULT_PROPS.disabled,
      error = SELECT_DEFAULT_PROPS.error,
      helperText,
      fullWidth = SELECT_DEFAULT_PROPS.fullWidth,
      color = SELECT_DEFAULT_PROPS.color,
      size = SELECT_DEFAULT_PROPS.size,
      variant = SELECT_DEFAULT_PROPS.variant,
      multiple = SELECT_DEFAULT_PROPS.multiple,
      clearable = SELECT_DEFAULT_PROPS.clearable,
      searchable = SELECT_DEFAULT_PROPS.searchable,
      loading = SELECT_DEFAULT_PROPS.loading,
      maxHeight = SELECT_DEFAULT_PROPS.maxHeight,
      renderOption,
      className,
      id,
      name,
      required,
      ...rest
   } = props;

   const [isOpen, setIsOpen] = useState(false);
   const [highlightedIndex, setHighlightedIndex] = useState(-1);
   const [internalValue, setInternalValue] = useState(defaultValue);
   const rootRef = useRef<HTMLDivElement>(null);

   const currentValue = value !== undefined ? value : internalValue;
   const hasValue = currentValue !== undefined && currentValue !== '';

   useOnClickOutside(rootRef, () => setIsOpen(false));

   const selectedOption = options.find((option) => option.value === currentValue);
   const displayValue = selectedOption?.label || '';

   const handleToggle = useCallback(() => {
      if (!disabled) {
         setIsOpen((prev) => !prev);
      }
   }, [disabled]);

   const handleOptionClick = useCallback(
      (optionValue: string | number) => {
         if (value === undefined) {
            setInternalValue(optionValue);
         }
         onChange?.(optionValue);
         setIsOpen(false);
         setHighlightedIndex(-1);
      },
      [value, onChange],
   );

   const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
         if (disabled) return;

         switch (event.key) {
            case 'Enter':
            case ' ':
               event.preventDefault();
               if (isOpen && highlightedIndex >= 0) {
                  const option = options[highlightedIndex];
                  if (option && !option.disabled) {
                     handleOptionClick(option.value);
                  }
               } else {
                  setIsOpen(true);
               }
               break;
            case 'Escape':
               setIsOpen(false);
               setHighlightedIndex(-1);
               break;
            case 'ArrowDown':
               event.preventDefault();
               if (!isOpen) {
                  setIsOpen(true);
               } else {
                  setHighlightedIndex((prev) => {
                     const next = prev + 1;
                     return next >= options.length ? 0 : next;
                  });
               }
               break;
            case 'ArrowUp':
               event.preventDefault();
               if (!isOpen) {
                  setIsOpen(true);
               } else {
                  setHighlightedIndex((prev) => {
                     const next = prev - 1;
                     return next < 0 ? options.length - 1 : next;
                  });
               }
               break;
         }
      },
      [disabled, isOpen, highlightedIndex, options, handleOptionClick],
   );

   useEffect(() => {
      if (isOpen && selectedOption) {
         const selectedIndex = options.findIndex((option) => option.value === selectedOption.value);
         setHighlightedIndex(selectedIndex);
      }
   }, [isOpen, selectedOption, options]);

   const styleProps = {
      variant,
      color,
      size,
      disabled,
      error,
      fullWidth,
      focused: isOpen,
      hasValue,
   };

   return (
      <SelectRoot ref={rootRef} $styleProps={styleProps} className={className} {...rest}>
         <SelectControl
            ref={ref}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-required={required}
            aria-invalid={error}
            aria-describedby={helperText ? `${id}-helper` : undefined}
            tabIndex={disabled ? -1 : 0}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            $styleProps={styleProps}
            id={id}
         >
            <SelectValue>{hasValue ? displayValue : placeholder}</SelectValue>
            <SelectIcon $open={isOpen}>
               <ChevronDownIcon />
            </SelectIcon>
         </SelectControl>

         <SelectDropdown $open={isOpen} $maxHeight={maxHeight}>
            {loading ? (
               <SelectLoadingOption>
                  <Spinner size="small" />
               </SelectLoadingOption>
            ) : options.length === 0 ? (
               <SelectEmptyOption>No options available</SelectEmptyOption>
            ) : (
               options.map((option, index) => (
                  <StyledSelectOption
                     key={option.value}
                     role="option"
                     aria-selected={option.value === currentValue}
                     onClick={() => !option.disabled && handleOptionClick(option.value)}
                     $selected={option.value === currentValue}
                     $disabled={!!option.disabled}
                     $highlighted={index === highlightedIndex}
                  >
                     {renderOption ? renderOption(option) : option.label}
                  </StyledSelectOption>
               ))
            )}
         </SelectDropdown>

         {helperText && (
            <SelectHelperText id={id ? `${id}-helper` : undefined} $error={error}>
               {helperText}
            </SelectHelperText>
         )}
      </SelectRoot>
   );
});

Select.displayName = 'Select';
