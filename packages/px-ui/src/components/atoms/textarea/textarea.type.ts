import type React from 'react';
import type { CSSObject } from 'styled-components';

import type { SxConfigProps } from '@pui/material/core';
import type { DeepOptional } from '@pui/material/core/helpers';

export interface PXComponentTextarea {
   defaultProps: {
      autoExpand: boolean;
      error: boolean;
      disabled: boolean;
      resize: 'none' | 'both' | 'horizontal' | 'vertical';
   };
   styleOverrides: {
      root: CSSObject;
   };
}

export type TextareaStyledProps = DeepOptional<PXComponentTextarea['defaultProps']> & SxConfigProps;

export type TextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'> & TextareaStyledProps;
