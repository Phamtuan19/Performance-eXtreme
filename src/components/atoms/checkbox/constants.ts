import { Palette } from '@/core';

import { PXComponentCheckbox } from './checkbox.type';

export const CHECKBOX_DEFAULT_PROPS: PXComponentCheckbox['defaultProps'] = {
   size: 'medium',
   color: 'primary',
   disabled: false,
   checked: false,
   defaultChecked: false,
   indeterminate: false,
   error: false,
};

export const createCheckboxCssVariant = (palette: Palette): PXComponentCheckbox['styleOverrides'] => {
   return {
      root: {},
      size: {
         large: {
            fontSize: '1.125rem',
            width: '20px',
            height: '20px',
         },
         medium: {
            fontSize: '1rem',
            width: '18px',
            height: '18px',
         },
         small: {
            fontSize: '0.875rem',
            width: '16px',
            height: '16px',
         },
      },
      color: {
         primary: {},
         secondary: {},
         success: {},
         error: {},
         warning: {},
         info: {},
         default: {},
      },
   };
};
