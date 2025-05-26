export const UNIT_DEFAULT = 'px';

export const BREAKPOINT_KEY = {
   XS: 'xs',
   SM: 'sm',
   MD: 'md',
   LG: 'lg',
   XL: 'xl',
} as const;

export type BreakpointKey = (typeof BREAKPOINT_KEY)[keyof typeof BREAKPOINT_KEY];

export const BREAKPOINT_VALUE = {
   [BREAKPOINT_KEY.XL]: 1536,
   [BREAKPOINT_KEY.LG]: 1200,
   [BREAKPOINT_KEY.MD]: 900,
   [BREAKPOINT_KEY.SM]: 600,
   [BREAKPOINT_KEY.XS]: 0,
} as const;

export type BreakpointValue = (typeof BREAKPOINT_VALUE)[keyof typeof BREAKPOINT_VALUE];
