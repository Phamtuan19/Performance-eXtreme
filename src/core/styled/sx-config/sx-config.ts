/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTheme } from '@/core/theme';
import { NestedCSSObject, SxConfigProps, Theme } from '@/core/types';

import { isObject } from '../../utils';
import { unstable_sxConfig } from '../unstable_sxConfig';

type ResponsiveStylesParams = {
   styleKey: string | string[];
   cssValue: Record<string, any>;
   theme: Theme;
};

export const responsiveStyles = ({ styleKey, cssValue, theme }: ResponsiveStylesParams) => {
   const { breakpoints } = theme;

   const { values } = breakpoints;

   const output: Record<string, any> = {};

   // Sắp xếp các breakpoint theo thứ tự tăng dần giá trị
   const sortedBreakpoints = Object.entries(cssValue).sort(([a], [b]) => values[a] - values[b]);

   // Tìm breakpoint lớn nhất được chỉ định trong cssValue hoặc lớn nhất trong values
   const fallbackKey = Object.keys(values).pop() as keyof typeof values;
   const maxBreakpointKey = (
      sortedBreakpoints.length ? sortedBreakpoints[sortedBreakpoints.length - 1][0] : fallbackKey
   ) as keyof typeof values;

   const maxBreakpointValue = values[maxBreakpointKey];

   // Hàm tạo style object
   const createStyleEntries = (value: any) =>
      Array.isArray(styleKey) ? Object.fromEntries(styleKey.map((k) => [k, value])) : { [styleKey]: value };

   sortedBreakpoints.forEach(([key, value]) => {
      const styleEntries = createStyleEntries(value);
      if (key === theme.breakpoints.keys[0] || values[key] === 0) {
         // Áp dụng cho tất cả các breakpoint nhỏ hơn hoặc bằng maxBreakpointValue
         output[`@media (max-width: ${maxBreakpointValue}px)`] = sxConfig(styleEntries);
      } else if (values[key] !== undefined) {
         // Áp dụng từ breakpoint đó trở lên
         output[`@media (min-width: ${values[key]}px)`] = sxConfig(styleEntries);
      }
   });

   return output;
};

const resolveSxNestedObject = (obj: any, theme: Theme): any => {
   if (typeof obj === 'function') {
      return resolveSxNestedObject(obj(theme), theme);
   }

   if (!isObject(obj)) return obj;

   const result: any = {};

   for (const key in obj) {
      const value = obj[key];

      // Nếu là key đặc biệt như media, pseudo, nested
      if (key.startsWith('@') || key.startsWith(':') || key.startsWith('&')) {
         result[key] = resolveSxNestedObject(value, theme);
         continue;
      }

      // Nếu là responsive object
      if (isObject(value)) {
         const responsive = responsiveStyles({ styleKey: key, cssValue: value, theme });
         Object.entries(responsive).forEach(([resKey, resValue]) => {
            result[resKey] = {
               ...(result[resKey] || {}),
               [key]: resValue,
            };
         });
         continue;
      }

      // Nếu có transform function
      const sxEntry = unstable_sxConfig[key];
      const transformFn =
         sxEntry && typeof sxEntry === 'object' && 'transform' in sxEntry ? sxEntry.transform : undefined;

      let processedValue = value;
      if (typeof transformFn === 'function') {
         processedValue = (transformFn as (val: any) => any)(value);
      } else if (typeof transformFn === 'string' && typeof (theme as any)[transformFn] === 'function') {
         processedValue = (theme as any)[transformFn](value);
      }

      // Map keys nếu có
      if (sxEntry && 'keys' in sxEntry) {
         const { keys } = sxEntry;
         if (Array.isArray(keys)) {
            keys.forEach((k) => (result[k] = processedValue));
         } else {
            result[keys] = processedValue;
         }
      } else {
         result[key] = processedValue;
      }
   }

   return result;
};

/**
 * Hàm xử lý các thuộc tính style từ `sx` và các tùy chọn responsive trong `options`,
 * kết hợp với theme để trả về các thuộc tính CSS đã được biến đổi và áp dụng responsive.
 *
 * @param {Object} params
 * @param {SxOptions} params.options - Đối tượng chứa các tùy chọn style, trong đó có trường `sx`.
 * @param {Theme} params.theme - Đối tượng theme chứa cấu hình sx và breakpoint.
 *
 * @returns {SxOptions} options đã được cập nhật các thuộc tính style đã xử lý.
 *
 * @example
 * const styles = sxConfig({
 *     sx: {
 *       p: 2,
 *       bgColor: 'primary.main',
 *       responsive: {
 *         md: { p: 4 }
 *       }
 *     },
 *     display: 'flex',
 *   });
 */
const sxConfig = (options: SxConfigProps = {}): any => {
   const theme = getTheme();
   const sxRaw = options.sx;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { sx = {}, ...resOption } = options;

   let resolvedSx: NestedCSSObject = {};

   if (typeof sxRaw === 'function') {
      resolvedSx = sxRaw(theme);
   } else if (Array.isArray(sxRaw)) {
      resolvedSx = sxRaw.reduce((acc, styleObj) => ({ ...acc, ...styleObj }), {});
   } else if (typeof sxRaw === 'object' && sxRaw !== null) {
      resolvedSx = sxRaw;
   }

   const combinedStyles = { ...resolvedSx, ...resOption };
   const processedStyles = resolveSxNestedObject(combinedStyles, theme);

   return processedStyles;
};

export { sxConfig };
