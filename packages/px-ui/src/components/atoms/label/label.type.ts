import type { SxConfigProps } from '@pui/material/core';

export type LabelStyledProps = SxConfigProps & {
   disabled: boolean;

   required: boolean;

   requiredColor?: string;
};

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & Partial<LabelStyledProps>;
