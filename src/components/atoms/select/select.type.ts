/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CSSObject } from 'styled-components';

import { SxConfigProps, ThemeColor, ThemeSize } from '@PUI/core';
import { DeepOptionalNullable } from '@PUI/core/helpers';

export type PXComponentSelect = {
   defaultProps: {
      color: ThemeColor | 'default';

      size: ThemeSize;
   };
   styleOverrides: {
      color: Record<ThemeColor | 'default', CSSObject>;

      size: Record<ThemeSize, CSSObject>;
   };
};

export interface FieldNames {
   value?: string;
   label?: string;
}

export type OptionType = {
   label?: string;
   value?: string | number;
   disabled?: boolean;
   [name: string]: any;
   children?: Omit<OptionType, 'children'>[];
};

export type SelectStyleProps = SxConfigProps &
   Partial<PXComponentSelect['defaultProps']> & {
      open: boolean;

      disabled?: boolean;

      isValue?: boolean;

      loading?: boolean;
   };

export type SelectProps = Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   'onChange' | 'color' | 'size' | 'children'
> &
   DeepOptionalNullable<Omit<SelectStyleProps, 'isValue'>> & {
      /**
       * List of options to display in the dropdown.
       */
      options: OptionType[];

      /**
       * Dropdown open state, can be controlled externally.
       */
      open?: boolean;

      /**
       * Selected value (controlled).
       */
      value?: Array<string | number> | string | number;

      /**
       * Default value when the component is mounted.
       */
      defaultValue?: Array<string | number> | string | number;

      /**
       * Custom field name configuration for `label` and `value` in each option object.
       */
      fieldNames?: FieldNames;

      /**
       * Component displayed at the beginning of the input, such as an icon or label.
       */
      prefix?: React.ReactNode;

      /**
       * Icon displayed at the end of the input.
       */
      suffixIcon?: React.ReactElement;

      /**
       * Placeholder displayed when no value is selected.
       */
      placeholder?: string;

      /**
       * Whether a value has been selected.
       */
      selected?: boolean;

      /**
       * Disable the entire select component.
       */
      disabled?: boolean;

      /**
       * Show a clear button when a value is selected.
       */
      clearable?: boolean;

      /**
       * Custom CSS for the dropdown menu.
       */
      dropdownStyle?: CSSObject;

      /**
       * Callback triggered when the selected value changes.
       *
       * @param value - The selected value (or array if `multiple` is enabled).
       * @param option - The corresponding option object.
       */
      onChange?: (value: Array<string | number> | string | number, option: OptionType) => void;

      /**
       * Custom render function for each dropdown item.
       *
       * @param option - The current option data.
       * @returns A custom React node to render.
       */
      optionRender?: (option: OptionType) => React.ReactNode;

      /**
       * Custom render function for the entire dropdown menu.
       *
       * @param menu - The default rendered dropdown content.
       * @returns A custom React node to replace the menu.
       */
      dropdownRender?: (menu: React.ReactNode) => React.ReactNode;
   };
