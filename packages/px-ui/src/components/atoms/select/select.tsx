import { computePosition, flip, offset } from '@floating-ui/dom';
import { merge } from 'lodash';
import React, { useId, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';
import { useLockBodyScroll, useOnClickOutside } from '@pui/material/hooks';

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
import type { SelectProps, OptionType, PXComponentSelect } from './select.type';

const SELECT_DEFAULT_PROPS: PXComponentSelect['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   disabled: false,
   open: false,
   loading: false,
   fieldNames: { label: 'label', value: 'value' },
   dropdownStyle: {},
};

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
      disabled,
      open,
      loading,
      prefix,
      suffixIcon,
      selected,
      fieldNames,
      dropdownStyle,
      multiple,
      color,
      onChange,
      optionRender,
      dropdownRender,
      ...resProps
   } = merge({}, SELECT_DEFAULT_PROPS, PXSelect, props);

   const { styleProps, remainingProps } = separateProps(resProps);
   const id = useId();
   const selectId = `px_select_${id}_list`;

   const [internalValue, setInternalValue] = useState<Array<string | number> | string | number>(
      value ?? defaultValue ?? '',
   );
   const [visible, setVisible] = useState(!!open);
   const [dropdownStyleInline, setDropdownStyleInline] = useState<React.CSSProperties>({});

   const [focusedIndex, setFocusedIndex] = useState<number>(-1);

   const refWrapper = useRef<HTMLDivElement | null>(null);
   const dropdownRef = useRef<HTMLDivElement | null>(null);

   const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
   optionRefs.current = [];

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

   const handleChange = (event: React.MouseEvent<Element> | React.KeyboardEvent<Element>, option: OptionType) => {
      event?.stopPropagation();

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

   const handleKeyDownSelectItem = (event: React.KeyboardEvent<HTMLDivElement>, option: OptionType) => {
      if (event.key === 'Enter') {
         event.preventDefault();
         handleChange(event, option);
         if (multiple) {
            setVisible(false);
         }
         refWrapper.current?.focus();
      }

      //   focus xuống item tiếp theo.
      if (event.key === 'ArrowDown') {
         event.preventDefault();
         setFocusedIndex((prev) => {
            const next = prev + 1 >= options.length ? 0 : prev + 1;
            optionRefs.current[next]?.focus();
            return next;
         });
      }
      //   focus lên item tiếp theo.
      if (event.key === 'ArrowUp') {
         event.preventDefault();
         setFocusedIndex((prev) => {
            const next = prev - 1 < 0 ? options.length - 1 : prev - 1;
            optionRefs.current[next]?.focus();
            return next;
         });
      }

      if (event.key === 'Escape') {
         setVisible(false);
         setFocusedIndex(-1);
         refWrapper.current?.focus();
      }
   };

   useEffect(() => {
      if (visible) {
         // Nếu muốn focus phần tử đầu tiên khi dropdown mở
         setFocusedIndex(0);

         // delay 1 tick để chắc chắn DOM đã render refs
         if (!multiple) {
            setTimeout(() => {
               optionRefs.current[0]?.focus();
            }, 0);
         }
      } else {
         setFocusedIndex(-1);
      }
   }, [visible, multiple]);

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
               id={`px-select-option-${selectId}-${index}`}
               ref={(el) => {
                  optionRefs.current[index] = el;
               }}
               tabIndex={-1}
               onKeyDown={(e) => handleKeyDownSelectItem(e, option)}
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

   const handleKeyDownSelectContainer = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
         if (!visible) {
            event.preventDefault();
            setVisible(true);
            setTimeout(() => {
               optionRefs.current[0]?.focus();
            }, 0);
         }
      }
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
            visible,
         }}
         tabIndex={0}
         onClick={toggleVisible}
         onKeyDown={handleKeyDownSelectContainer}
      >
         <SelectWrapper
            $styleProps={{
               open: visible,
               disabled: isDisabled,
               loading,
               hasSuffixIcon: !!suffixIcon,
            }}
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
               tabIndex={-1}
               aria-activedescendant={focusedIndex >= 0 ? `px-select-option-${id}-${focusedIndex}` : undefined}
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
            {!loading && suffixIcon && <SelectSuffixIcon>{suffixIcon}</SelectSuffixIcon>}
         </SelectWrapper>

         {visible && createPortal(renderDropdownContent(), document.body)}
      </SelectContainer>
   );
});

Select.displayName = 'PXSelect';

export default React.memo(Select);
