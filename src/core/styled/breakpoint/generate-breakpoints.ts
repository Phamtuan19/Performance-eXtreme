import { BREAKPOINT_VALUE } from './constants';

export function generateBreakpoints() {
   const keys = Object.keys(BREAKPOINT_VALUE).sort(
      (a, b) =>
         BREAKPOINT_VALUE[a as keyof typeof BREAKPOINT_VALUE] - BREAKPOINT_VALUE[b as keyof typeof BREAKPOINT_VALUE],
   ) as (keyof typeof BREAKPOINT_VALUE)[];

   const breakpoints: Record<string, string> = {};

   keys.forEach((key, index) => {
      const minWidth = BREAKPOINT_VALUE[key];
      const maxWidth = index < keys.length - 1 ? BREAKPOINT_VALUE[keys[index + 1]] - 1 : null;

      if (maxWidth !== null) {
         breakpoints[key] = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
      } else {
         breakpoints[key] = `(min-width: ${minWidth}px)`;
      }
   });

   return breakpoints;
}
