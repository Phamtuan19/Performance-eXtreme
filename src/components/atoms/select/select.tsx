import { computePosition, flip, offset } from '@floating-ui/dom';
import { merge } from 'lodash';
import React, { useId, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';
import { useLockBodyScroll, useOnClickOutside } from '@PUI/hooks';

import {
   SelectOptionItem,
   SelectDropdown,
   SelectOptionWrapper,
   SelectContainer,
   SelectWrapper,
   SelectInput,
   SelectItem,
   SelectSuffixIcon,
} from './select.styled';
import type { SelectProps, OptionType } from './select.type';

const Select = React.forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
   const { components } = getTheme();

   const PXSelect = components.PXSelect?.defaultProps;

   const {
      sx,
      options,
      name,
      placeholder,
      defaultValue,
      value,
      disabled = PXSelect?.disabled ?? false,
      open = PXSelect?.open ?? false,
      loading,
      prefix,
      suffixIcon,
      selected,
      fieldNames: rawFieldNames,
      dropdownStyle = PXSelect?.dropdownStyle,
      multiple,
      color,
      onChange,
      optionRender,
      dropdownRender,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);
   const id = useId();
   const selectId = `px_select_${id}_list`;

   const [internalValue, setInternalValue] = useState<Array<string | number> | string | number>(
      value ?? defaultValue ?? '',
   );
   const [visible, setVisible] = useState(!!open);
   const [dropdownStyleInline, setDropdownStyleInline] = useState<React.CSSProperties>({});

   const refWrapper = useRef<HTMLDivElement | null>(null);
   const dropdownRef = useRef<HTMLDivElement | null>(null);

   const fieldNames = merge({}, rawFieldNames, PXSelect?.fieldNames, { label: 'label', value: 'value' });

   const labelKey = fieldNames.label;
   const valueKey = fieldNames.value;
   const isDisabled = disabled || loading || false;

   // Sync controlled value & open
   useEffect(() => {
      if (value !== undefined) setInternalValue(value);
   }, [value]);

   useEffect(() => {
      if (typeof open === 'boolean') setVisible(open);
   }, [open]);

   useLockBodyScroll(visible);
   useOnClickOutside(refWrapper, () => {
      if (open === undefined || visible) {
         setVisible(false);
      }
   }, [dropdownRef]);

   const updatePosition = useCallback(() => {
      if (!visible || !refWrapper.current || !dropdownRef.current) return;
      const anchorRect = refWrapper.current.getBoundingClientRect();

      computePosition(refWrapper.current, dropdownRef.current, {
         placement: 'bottom-start',
         middleware: [offset(4), flip()],
      }).then(({ x, y }) => {
         setDropdownStyleInline({
            position: 'absolute',
            top: `${y + window.scrollY}px`,
            left: `${x + window.scrollX}px`,
            width: `${anchorRect.width}px`,
         });
      });
   }, [visible]);

   useEffect(() => {
      updatePosition();
   }, [visible, updatePosition]);

   const toggleVisible = () => {
      if (!disabled) setVisible((prev) => !prev);
   };

   const handleChange = (e: React.MouseEvent, option: OptionType) => {
      e?.stopPropagation(); // 👈 chống toggle lại

      const val = option[valueKey];

      if (multiple) {
         const newValue = Array.isArray(internalValue)
            ? internalValue.includes(val)
               ? internalValue.filter((v) => v !== val)
               : [...internalValue, val]
            : [val];

         setInternalValue(newValue);
         onChange?.(newValue, option);
      } else {
         if (internalValue !== val) {
            setInternalValue(val);
            onChange?.(val, option);
         }

         setVisible(false);
      }
   };

   const displayValue = React.useMemo(() => {
      if (!internalValue) return '';

      if (multiple && Array.isArray(internalValue)) {
         return options
            .filter((o) => internalValue.includes(o[valueKey]))
            .map((o) => o[labelKey])
            .join(', ');
      }
      const matched = options.find((o) => o[valueKey] === internalValue);

      return matched?.[labelKey] ?? String(internalValue);
   }, [internalValue, multiple, options, labelKey, valueKey]);

   const renderOptions = () =>
      options.map((option, index) => {
         const optionVal = option[valueKey];
         const isActive = multiple
            ? Array.isArray(internalValue) && internalValue.includes(optionVal)
            : internalValue === optionVal;
         const key = optionVal ?? index;

         if (optionRender) return <React.Fragment key={key}>{optionRender(option)}</React.Fragment>;

         return (
            <SelectOptionItem
               key={key}
               onClick={(e) => handleChange(e, option)}
               className={cn('px-select-option-item', {
                  'px-select-option-item-active': isActive,
                  'px-select-option-item-active-selected': isActive && selected,
               })}
               $styleProps={{ isActive, selected }}
            >
               {option[labelKey]}
            </SelectOptionItem>
         );
      });

   const renderDropdownContent = () => {
      const menu = renderOptions();
      const content = dropdownRender ? dropdownRender(menu) : menu;

      return (
         <SelectDropdown ref={dropdownRef} style={dropdownStyleInline} $styleProps={{ dropdownStyle }}>
            <SelectOptionWrapper
               role="listbox"
               aria-labelledby={`px-select-option-wrapper px-select-input-${id}`}
               aria-multiselectable={multiple}
            >
               {content}
            </SelectOptionWrapper>
         </SelectDropdown>
      );
   };

   return (
      <SelectContainer
         ref={refWrapper}
         className="px-select-container"
         $styleProps={{
            ...styleProps,
            sx: sx ?? undefined,
            disabled: isDisabled,
            color: color ?? PXSelect?.color ?? 'primary',
            size: PXSelect?.size ?? 'medium',
            fieldNames,
            dropdownStyle: dropdownStyle ?? PXSelect?.dropdownStyle ?? {},
         }}
         onClick={toggleVisible}
      >
         <SelectWrapper
            $styleProps={{ open: visible, disabled: isDisabled, loading: !!loading, hasSuffixIcon: !!suffixIcon }}
            className="px-select-wrapper"
         >
            <SelectInput
               id={`px-select-input-${id}`}
               name={name ?? `px-select-${id}`}
               ref={ref}
               role="combobox"
               aria-expanded={visible}
               aria-haspopup="listbox"
               aria-controls={selectId}
               aria-owns={selectId}
               placeholder={placeholder}
               type="search"
               readOnly
               unselectable="on"
               value={displayValue}
               disabled={isDisabled}
               aria-multiselectable={multiple}
               {...remainingProps}
            />
            {prefix}
            <SelectItem
               id={selectId}
               role="listbox"
               aria-label={String(internalValue)}
               $styedProps={{ isValue: !!internalValue, hasSuffixIcon: !!suffixIcon }}
               className="px-select-selection-item"
            >
               {displayValue || placeholder}
            </SelectItem>
            {suffixIcon && <SelectSuffixIcon>{suffixIcon}</SelectSuffixIcon>}
         </SelectWrapper>

         {visible && createPortal(renderDropdownContent(), document.body)}
      </SelectContainer>
   );
});

Select.displayName = 'PXSelect';

export default React.memo(Select);
