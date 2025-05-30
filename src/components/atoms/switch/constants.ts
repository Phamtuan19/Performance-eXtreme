import type { PXComponentSwitch } from './switch.type';

export const SWITCH_DEFAULT_PROPS: PXComponentSwitch['defaultProps'] = {
   checked: false,
   defaultChecked: false,
   checkedLabel: null,
   color: 'primary',
   size: 'small',
   disabled: false,
   loading: false,
   unCheckedLabel: undefined,
};

export const SWITCH_CSS_VARIANT: PXComponentSwitch['styleOverrides'] = {
   root: {},
   size: {
      small: { trackWidth: 44, trackHeight: 22, thumbSize: 16, padding: 1 },
      medium: { trackWidth: 50, trackHeight: 26, thumbSize: 20, padding: 1 },
      large: { trackWidth: 58, trackHeight: 32, thumbSize: 24, padding: 1 },
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
