import _ from 'lodash';

import { BREAKPOINT_KEY, BREAKPOINT_VALUE, UNIT_DEFAULT } from './constants';
import { generateBreakpoints } from './generate-breakpoints';

export function createBreakpoints(breakpointInput: { values?: Partial<Record<string, number>>; unit?: string }) {
   const { values = {}, unit = UNIT_DEFAULT } = breakpointInput;

   const valueOutput = _.merge(BREAKPOINT_VALUE, values);
   const keyOutput = _.union(Object.values(BREAKPOINT_KEY), Object.keys(values));

   return {
      keys: keyOutput,
      values: valueOutput,
      unit,
      generateBreakpoints,
   };
}
