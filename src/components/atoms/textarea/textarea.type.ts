import React from 'react';

import { PXComponentTextarea, SxProps, Theme } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

export interface TextareaProps
   extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>,
      UnstableSxConfigProps,
      Partial<PXComponentTextarea['defaultProps']> {
   sx?: SxProps<Theme>;
}
