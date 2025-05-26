import { isCSSKey } from '../utils';

import { unstable_sxConfig } from './unstable_sxConfig';

const PROP_STYLED_COMPONENT = ['variant', 'color', 'size'];

interface StyleConfig {
   [key: string]: any;
}

interface SeparatePropsResult {
   styleProps: Record<string, any>;
   remainingProps: Record<string, any>;
}

/**
 * Hàm tách các thuộc tính style và các thuộc tính còn lại từ một đối tượng options.
 *
 * @param options - Đối tượng chứa tất cả các props được truyền vào component.
 * @param sxConfig - Cấu hình cho các thuộc tính style tuỳ biến.
 * @returns Một object có 2 phần:
 *   - styleProps: chứa các props liên quan đến style.
 *   - remainingProps: chứa các props còn lại.
 */
function separateProps(options: Record<string, any>, sxConfig: StyleConfig = unstable_sxConfig): SeparatePropsResult {
   return Object.keys(options).reduce<SeparatePropsResult>(
      (accumulator, currentKey) => {
         if (sxConfig[currentKey] || isCSSKey(currentKey) || PROP_STYLED_COMPONENT.includes(currentKey)) {
            accumulator.styleProps[currentKey] = options[currentKey];
         } else {
            accumulator.remainingProps[currentKey] = options[currentKey];
         }
         return accumulator;
      },
      {
         styleProps: {},
         remainingProps: {},
      },
   );
}

export default separateProps;
