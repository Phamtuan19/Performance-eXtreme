import type React from 'react';

import type { PXComponentTextarea, SxConfigProps } from '@PUI/core';

export type TextareaStyledProps = SxConfigProps;

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'> &
   TextareaStyledProps &
   Partial<PXComponentTextarea['defaultProps']>;
