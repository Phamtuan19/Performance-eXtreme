/* eslint-disable no-console */
import type { Theme } from '@pui/material/core/types';

const checkValidUnit = (argsInput: string): string => {
   if (!/[\d\s](px|em|rem|%|vh|vw|auto)$/.test(argsInput)) {
      console.error(
         [
            `PUI: The value "${argsInput}" does not have a valid unit.`,
            `Expected one of "px", "em", "rem", "%", "vh", or "vw".`,
            `Defaulting to "px".`,
         ].join('\n'),
      );
   }
   return argsInput;
};

type SpacingFunction = {
   (...argsInput: (string | number)[]): string;
   PUI?: boolean;
};

/**
 * Tạo một object spacing chứa unit và hàm spacing tương tự MUI.
 *
 * @param unit - Đơn vị spacing mặc định, ví dụ 8.
 * @returns Object có dạng { unit, spacing }
 */
export function createSpacingObject(unit: number): Theme['spacing'] {
   const spacingFn: SpacingFunction = (...argsInput) => {
      if (process.env.NODE_ENV !== 'production' && argsInput.length > 4) {
         console.error(`PUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }

      const args = argsInput.length === 0 ? [1] : argsInput;

      return args
         .map((item) => {
            if (typeof item === 'string') {
               return checkValidUnit(item);
            }

            if (typeof item === 'number') {
               if (item < 0) {
                  console.warn(`PUI: Negative spacing value ${item} should be avoided.`);
               }

               return item <= 20 ? `${item * unit}px` : `${item}px`;
            }

            console.warn(`PUI: Invalid spacing value ${item}, fallback to string.`);
            return String(item);
         })
         .join(', ');
   };

   spacingFn.PUI = true;

   return {
      unit,
      spacingFn,
   };
}
