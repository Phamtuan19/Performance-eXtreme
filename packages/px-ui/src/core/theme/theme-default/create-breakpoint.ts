/* eslint-disable no-console */
import type { BreakpointKey, Breakpoints } from '@PUI/core/types';

const BREAKPOINT_VALUE: Record<BreakpointKey, number> = {
   xs: 0,
   sm: 600,
   md: 900,
   lg: 1200,
   xl: 1536,
};

export function createBreakpoints({
   values = {},
   unit = 'px',
}: {
   values?: Partial<Record<string, number>>;
   unit?: string;
}): Breakpoints {
   // Lọc bỏ các giá trị undefined trong values
   const filteredValues = Object.fromEntries(Object.entries(values).filter(([_, v]) => v !== undefined)) as Record<
      string,
      number
   >;

   // Merge giá trị mặc định và filtered custom
   const valueOutput: Record<string, number> = { ...BREAKPOINT_VALUE, ...filteredValues };

   // Các phần còn lại giữ nguyên
   const defaultKeys = Object.keys(BREAKPOINT_VALUE);
   const customKeys = Object.keys(filteredValues);

   // Cảnh báo key không hợp lệ (chỉ cảnh báo key không phải default hoặc kiểu string nào cũng được)
   customKeys.forEach((key) => {
      if (!defaultKeys.includes(key)) {
         console.warn(`PUI: Custom breakpoint key "${key}" is not in default keys.`);
      }
   });

   // Lấy tất cả key hợp lệ (default + custom)
   const allKeysSet = new Set([...defaultKeys, ...customKeys]);
   const validKeys = Array.from(allKeysSet);

   function generateBreakpoints(): Record<string, string> {
      const keys = Object.keys(valueOutput).sort((a, b) => valueOutput[a] - valueOutput[b]);

      const breakpoints: Record<string, string> = {};

      keys.forEach((key, index) => {
         const minWidth = valueOutput[key];
         const maxWidth = index < keys.length - 1 ? valueOutput[keys[index + 1]] - 1 : null;

         if (maxWidth !== null) {
            breakpoints[key] = `(min-width: ${minWidth}${unit}) and (max-width: ${maxWidth}${unit})`;
         } else {
            breakpoints[key] = `(min-width: ${minWidth}${unit})`;
         }
      });

      return breakpoints;
   }

   return {
      keys: validKeys,
      values: valueOutput,
      unit,
      generateBreakpoints,
   };
}
