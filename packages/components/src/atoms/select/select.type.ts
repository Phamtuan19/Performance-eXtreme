import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface SelectOption {
   value: string | number;
   label: string;
   disabled?: boolean;
}

export interface SelectProps {
   value?: string | number;
   defaultValue?: string | number;
   placeholder?: string;
   options: SelectOption[];
   onChange?: (value: string | number) => void;
   disabled?: boolean;
   error?: boolean;
   helperText?: string;
   fullWidth?: boolean;
   color?: ThemeColor;
   size?: ThemeSize;
   variant?: 'outline' | 'filled' | 'standard';
   multiple?: boolean;
   clearable?: boolean;
   searchable?: boolean;
   loading?: boolean;
   maxHeight?: number;
   renderOption?: (option: SelectOption) => React.ReactNode;
   className?: string;
   id?: string;
   name?: string;
   required?: boolean;
}

export interface SelectStyledProps {
   color: ThemeColor;
   size: ThemeSize;
   variant: 'outline' | 'filled' | 'standard';
   disabled: boolean;
   error: boolean;
   fullWidth: boolean;
   focused: boolean;
   hasValue: boolean;
}
