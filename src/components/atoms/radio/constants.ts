import { PXComponentRadio } from './radio.type';

export const RADIO_DEFAULT_PROPS: PXComponentRadio['defaultProps'] = {
   size: 'medium',
   color: 'primary',
   disabled: false,
   checked: false,
   defaultChecked: false,
   error: false,
};

export const RADIO_CSS_VARIANT: PXComponentRadio['styleOverrides'] = {
   root: {},
   size: {
      large: {
         fontSize: '1.125rem',
         width: '24px',
         height: '24px',
      },
      medium: {
         fontSize: '1rem',
         width: '20px',
         height: '20px',
      },
      small: {
         fontSize: '0.875rem',
         width: '18px',
         height: '18px',
      },
   },
   color: {
      primary: {},
      secondary: {},
      success: {},
      error: {},
      warning: {},
      info: {},
   },
};
