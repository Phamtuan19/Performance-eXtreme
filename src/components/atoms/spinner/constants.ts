import type { PXComponentSpinner } from './spinner.type';

export const SPINNER_SIZE_DEFAULT: PXComponentSpinner['styleOverrides']['size'] = {
   small: {
      width: '16px',
      height: '16px',
      thickness: 2,
   },
   medium: {
      width: '24px',
      height: '24px',
      thickness: 3,
   },
   large: {
      width: '32px',
      height: '32px',
      thickness: 4,
   },
};
