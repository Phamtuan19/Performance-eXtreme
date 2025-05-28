/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const checkValidUnit = (argsInput: string): string => {
   // Kiểm tra nếu chuỗi không chứa bất kỳ đơn vị đo lường nào
   if (!/[\d\s](px|em|rem|%|vh|vw|auto)$/.test(argsInput)) {
      console.error(
         `LOUT: The value "${argsInput}" does not have a valid unit. Expected one of "px", "em", "rem", "%", "vh", or "vw". Defaulting to "px".`,
      );
   }
   return argsInput;
};

/**
 * Tạo một hàm spacing với giá trị mặc định.
 *
 * @param spacingInput - Giá trị spacing mặc định.
 * @returns Hàm spacing có thể được gọi với các tham số.
 */
type SpacingFunction = {
   (...argsInput: (string | number)[]): string;
   lout?: boolean;
};

const createSpacing = (spacingInput: number = 8): SpacingFunction => {
   if ((spacingInput as any).lout) {
      return spacingInput as unknown as SpacingFunction;
   }

   const spacing: SpacingFunction = (...argsInput) => {
      if (process.env.NODE_ENV !== 'production') {
         if (argsInput.length > 4) {
            console.error(`LOUT: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
         }
      }

      const args = argsInput.length === 0 ? [1] : argsInput;

      return args
         .map((item) => {
            if (typeof item === 'string') {
               return checkValidUnit(item);
            }

            if (typeof item === 'number') {
               if (item < 0) {
                  console.warn(`LOUT: Negative spacing value ${item} should be avoided.`);
               }

               if (item <= 20) {
                  return `${item * spacingInput}px`;
               }

               return `${item}px`;
            }

            return item;
         })
         .join(', ');
   };

   spacing.lout = true;

   return spacing;
};

export default createSpacing;
