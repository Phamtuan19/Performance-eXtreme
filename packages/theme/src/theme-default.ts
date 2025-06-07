import { merge } from 'lodash';
import { keyframes } from 'styled-components';

import type { Breakpoints, Palette, Theme, ThemeColor, ThemeOptionsSafe } from './types';

import {
   gray,
   blue,
   red,
   sky,
   green,
   amber,
   pink,
   indigo,
   orange,
   yellow,
   lime,
   emerald,
   teal,
   cyan,
   violet,
   purple,
   fuchsia,
   rose,
   slate,
   zinc,
   neutral,
   stone,
} from './color';
import { createBreakpoints } from './create-breakpoint';
import { createSpacingObject } from './create-spacing';

export const THEME_COLORS: ThemeColor[] = ['primary', 'secondary', 'error', 'warning', 'success', 'info'];

const PALETTE: Palette = {
   mode: 'light',
   common: {
      black: '#000000',
      white: '#FFFFFF',
      icon: gray['700'], // màu cho icon biểu tượng
      hint: gray['400'], // màu placeholder, hint
      link: blue['600'], // màu link là màu xanh
      error: red['600'], // màu lỗi đỏ đậm
      info: sky['600'], // màu info nhẹ nhàng
      success: green['600'], // màu thành công xanh lá
      warning: amber['600'], // màu cảnh báo vàng cam
   },
   disabled: {
      backgroundColor: '#f5f5f5', // gray-100
      color: gray['400'],
      borderColor: '#d9d9d9', // gray-300
   },

   primary: {
      main: blue[500],
      light: blue[400],
      dark: blue[700],
      contrastText: '#FFFFFF',
   },

   secondary: {
      main: pink[500],
      light: pink[300],
      dark: pink[700],
      contrastText: '#FFFFFF',
   },

   error: {
      main: red[500],
      light: red[300],
      dark: red[700],
      ...red,
      contrastText: '#FFFFFF',
   },

   warning: {
      main: amber[500],
      light: amber[300],
      dark: amber[700],
      contrastText: '#FFFFFF',
   },

   success: {
      main: green[500],
      light: green[300],
      dark: green[700],
      contrastText: '#FFFFFF',
   },

   info: {
      main: indigo[500],
      light: indigo[300],
      dark: indigo[700],
      contrastText: '#FFFFFF',
   },

   red,
   orange,
   amber,
   yellow,
   lime,
   green,
   emerald,
   teal,
   cyan,
   sky,
   blue,
   indigo,
   violet,
   purple,
   fuchsia,
   pink,
   rose,
   slate,
   zinc,
   neutral,
   gray,
   stone,
};

const CURRENT_DEFAULT_THEME: Omit<Theme, 'sxConfig'> = {
   palette: PALETTE,
   breakpoints: createBreakpoints({}),
   typography: {
      htmlFontSize: 16,
      fontSize: 14,
      pxToRem: (px: number) => {
         return `${px / 16}rem`;
      },
   },

   components: {},

   spacing: createSpacingObject(8),

   shadows: [
      /**
       * 0: Không bóng
       */
      'none',

      /**
       * 1: Bóng nhẹ cho button nhỏ, text field
       */
      '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)',

      /**
       * 2: Card nhỏ, dropdown
       */
      '0px 1px 5px rgba(0,0,0,0.14), 0px 2px 2px rgba(0,0,0,0.24)',

      /**
       * 3: Card trung bình, tooltip
       */
      '0px 1px 8px rgba(0,0,0,0.15), 0px 3px 4px rgba(0,0,0,0.22)',

      /**
       * 4: Card nâng cao, popover nhỏ
       */
      '0px 2px 4px rgba(0,0,0,0.18), 0px 4px 5px rgba(0,0,0,0.2)',

      /**
       * 5: Popup, popover lớn
       */
      '0px 3px 5px rgba(0,0,0,0.2), 0px 6px 10px rgba(0,0,0,0.22)',

      /**
       * 6: Modal nhẹ
       */
      '0px 5px 10px rgba(0,0,0,0.25), 0px 10px 14px rgba(0,0,0,0.22)',

      /**
       * 7: Modal trung bình
       */
      '0px 6px 15px rgba(0,0,0,0.3), 0px 12px 20px rgba(0,0,0,0.25)',

      /**
       * 8: Modal lớn, dialog
       */
      '0px 10px 20px rgba(0,0,0,0.35), 0px 20px 30px rgba(0,0,0,0.3)',

      /**
       * 9: Overlay lớn, fullscreen modal
       */
      '0px 15px 25px rgba(0,0,0,0.4), 0px 30px 40px rgba(0,0,0,0.35)',

      'inset 0px 1px 3px rgba(0,0,0,0.1)',
      /**
       * 10: Bóng trong nhẹ, dùng cho input hoặc trạng thái đặc biệt
       */

      'inset 0px 2px 6px rgba(0,0,0,0.15)',
      /**
       * 11: Bóng trong rõ hơn, hiệu ứng lõm sâu
       */

      '0 0 8px rgba(0,123,255,0.6)',
      /**
       * 12: Focus outline màu xanh dương
       */

      '0 0 12px rgba(255, 0, 0, 0.7)',
      /**
       * 13: Highlight đỏ, dùng cho trạng thái cảnh báo
       */

      '0 0 12px rgba(0, 255, 0, 0.7)',
      /**
       * 14: Highlight xanh lá, dùng cho trạng thái thành công
       */

      '0 0 12px rgba(0, 0, 255, 0.7)',
      /**
       * 15: Highlight xanh dương, dùng cho trạng thái thông tin
       */
   ],

   shape: {
      borderRadius: 4,
   },

   keyframes: {
      spinnerSpin: keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        `,
      animation: {
         durations: {
            fast: '150ms', // Thời gian nhanh, dùng cho hiệu ứng nhỏ, nhanh
            normal: '300ms', // Thời gian bình thường, phù hợp với đa số animation
            slow: '500ms', // Thời gian chậm, dùng cho hiệu ứng chuyển đổi rõ ràng
         },
         easings: {
            in: 'ease-in', // Tăng tốc từ từ
            out: 'ease-out', // Giảm tốc từ từ
            inOut: 'ease-in-out', // Tăng tốc rồi giảm tốc
         },
      },
   },

   zIndex: {
      /** Lớp mặc định, dùng cho phần tử nền */
      base: 0,

      /** Dropdown menu hoặc select options (hiển thị phía trên nội dung thông thường) */
      dropdown: 100,

      /** Các phần tử sử dụng `position: sticky` như header cố định khi scroll */
      sticky: 200,

      /** Các phần tử được định vị bằng `position: fixed` như thanh công cụ hoặc nút nổi */
      fixed: 300,

      /** Lớp mờ nền (backdrop) cho modal, drawer... */
      backdrop: 400,

      /** Cửa sổ modal (nằm phía trên backdrop và nội dung chính) */
      modal: 500,

      /** Các popover, như tooltip có nội dung mở rộng từ một phần tử */
      popover: 600,

      /** Tooltip nhỏ, hiển thị trên cùng để hiển thị gợi ý khi hover */
      tooltip: 700,
   },

   unstable_sxConfig: {},
   __createdByCreateTheme: true,
};

const DEFAULT_THEME = {
   ...CURRENT_DEFAULT_THEME,
   sxConfig: () => ({}), // Placeholder for sxConfig
};

/**
 * The current theme in use (default is DEFAULT_THEME)
 */
let currentTheme = DEFAULT_THEME;

/**
 * Function to update the theme (e.g., when using a custom theme)
 * @param newTheme - Partial theme object to override defaults
 * @returns The updated merged theme
 */
export function setTheme(newTheme: Partial<typeof DEFAULT_THEME>) {
   currentTheme = merge(DEFAULT_THEME, newTheme);

   return currentTheme;
}

/**
 * Function to get the current theme
 * @returns The current theme object
 */
export function getTheme(): Theme {
   return currentTheme;
}

function filterUndefinedValues(obj?: Partial<Record<string, number>>): Record<string, number> {
   if (!obj) return {};
   return Object.entries(obj)
      .filter(([_, v]) => v !== undefined)
      .reduce(
         (acc, [key, val]) => {
            acc[key] = val as number;
            return acc;
         },
         {} as Record<string, number>,
      );
}

export const createThemeOption = (options: ThemeOptionsSafe): Theme => {
   const palette = merge({}, DEFAULT_THEME.palette, options.palette);

   const filteredBreakpointValues = filterUndefinedValues(options?.breakpoints?.values);

   const breakpoints: Breakpoints = {
      keys: merge([], DEFAULT_THEME.breakpoints.keys, Object.keys(filteredBreakpointValues)),
      values: merge({}, DEFAULT_THEME.breakpoints.values, filteredBreakpointValues),
      unit: DEFAULT_THEME.breakpoints.unit,
      generateBreakpoints: DEFAULT_THEME.breakpoints.generateBreakpoints,
   };

   const spacing: Theme['spacing'] = {
      unit: options?.spacing?.unit ?? DEFAULT_THEME.spacing.unit,
      spacingFn: DEFAULT_THEME.spacing.spacingFn,
   };

   const mergedTheme = {
      ...DEFAULT_THEME,
      palette,
      breakpoints,
      spacing,
      components: {
         ...DEFAULT_THEME.components,
         ...options.components,
      },
      typography: {
         ...options.typography,
         ...DEFAULT_THEME.typography,
         pxToRem: DEFAULT_THEME.typography.pxToRem,
      },
      keyframes: merge({}, DEFAULT_THEME.keyframes, options.keyframes),

      shadows: merge([], DEFAULT_THEME.shadows, options.shadows),

      unstable_sxConfig: DEFAULT_THEME.unstable_sxConfig,
      __createdByCreateTheme: true,
   };

   mergedTheme.sxConfig = () => ({}); // Placeholder for sxConfig

   setTheme(mergedTheme);

   return mergedTheme;
};
