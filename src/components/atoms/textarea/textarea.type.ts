import React from 'react';

import { PXComponentTextarea, SxProps, Theme } from '@PUI/core';
import { UnstableSxConfigProps } from '@PUI/core/styled';

export interface TextareaProps
   extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>,
      UnstableSxConfigProps,
      Partial<PXComponentTextarea['defaultProps']> {
   sx?: SxProps<Theme>;
}
