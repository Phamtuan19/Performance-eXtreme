/* eslint-disable @typescript-eslint/no-explicit-any */
import { isArray, isFunction, merge } from 'lodash';
import type { CSSObject } from 'styled-components';

import type { SxConfigProps, SxProps as NestedCSSObject, Theme, SxProps } from '@pui/material/core/types';
import { isObject } from '@pui/material/core/utils';
import type { StandardCSSProperties } from '@pui/material/types';

import { unstable_sxConfig } from '../unstable_sxConfig';

type ResponsiveStylesParams<T extends keyof StandardCSSProperties> = {
   styleKey: T | T[];
   cssValue: Partial<Record<string, StandardCSSProperties[T]>>;
   theme: Omit<Theme, 'sxConfig'>;
};

// export ;

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

// Thêm đối số thứ 2: base (giá trị mặc định ví dụ như theme.components?.xxx)
function createSxConfig(theme: Omit<Theme, 'sxConfig'>): (options?: SxConfigProps, base?: CSSObject) => CSSObject {
   const responsiveStyles = <T extends keyof StandardCSSProperties>({
      styleKey,
      cssValue,
      theme,
   }: ResponsiveStylesParams<T>): Record<string, Partial<StandardCSSProperties>> => {
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
      //    const createStyleEntries = (value: any) =>
      //       Array.isArray(styleKey) ? Object.fromEntries(styleKey.map((k) => [k, value])) : { [styleKey]: value };

      const createStyleEntries = (value: any): Partial<StandardCSSProperties> =>
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

   const resolveSxNestedObject = (
      obj: SxProps<Omit<Theme, 'sxConfig'>> | ((theme: Omit<Theme, 'sxConfig'>) => SxProps<Omit<Theme, 'sxConfig'>>),
      theme: Omit<Theme, 'sxConfig'>,
   ): CSSObject => {
      if (typeof obj === 'function') {
         return resolveSxNestedObject(obj(theme), theme);
      }

      if (!isObject(obj)) return obj;

      const result: any = {};

      for (const key in obj) {
         if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
         const value = (obj as Record<string, any>)[key];

         // Nếu là key đặc biệt như media, pseudo, nested
         if (key.startsWith('@') || key.startsWith(':') || key.startsWith('&')) {
            result[key] = resolveSxNestedObject(value, theme);
            continue;
         }

         // Nếu là responsive object
         if (isObject(value)) {
            const responsive = responsiveStyles({
               styleKey: key as keyof StandardCSSProperties,
               cssValue: value,
               theme,
            });
            Object.entries(responsive).forEach(([resKey, resValue]) => {
               result[resKey] = {
                  ...(result[resKey] || {}),
                  ...resValue,
               };
            });
            continue;
         }

         //   // Nếu có transform function
         const sxEntry = unstable_sxConfig[key];
         const transformFn =
            sxEntry && typeof sxEntry === 'object' && 'transform' in sxEntry ? sxEntry.transform : undefined;

         let processedValue = value;
         if (typeof transformFn === 'function') {
            processedValue = (transformFn as (val: any) => any)(value);
         }

         if (typeof transformFn === 'string') {
            if (transformFn === 'spacing') {
               processedValue = theme.spacing.spacingFn(value);
            }

            if (typeof (theme as any)[transformFn] === 'function') {
               processedValue = (theme as any)[transformFn](value);
            }
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

   const sxConfig = (options: SxConfigProps = {}, base: CSSObject = {}): CSSObject => {
      //   const theme = getTheme();
      const sxRaw = options.sx;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { sx = {}, ...resOption } = options;

      // 1. Resolve sx nếu là function hoặc array
      let resolvedSx: NestedCSSObject<Theme> = {};

      if (isFunction(sxRaw)) {
         resolvedSx = sxRaw(theme);
      } else if (isArray(sxRaw)) {
         resolvedSx = sxRaw.reduce((acc, styleObj) => {
            const resolved = isFunction(styleObj) ? styleObj(theme) : styleObj;
            return merge(acc, resolved);
         }, {});
      } else if (typeof sxRaw === 'object' && sxRaw !== null) {
         resolvedSx = sxRaw;
      }

      // 2. Merge theo đúng thứ tự ưu tiên:
      // base (thấp) < resOption < sx (cao)
      const combinedStyles = merge({}, base, resOption, resolvedSx);

      // 3. Biến đổi style theo config
      const processedStyles = resolveSxNestedObject(combinedStyles, theme);

      return processedStyles;
   };

   return sxConfig;
}

export default createSxConfig;
