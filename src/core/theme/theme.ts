import _ from 'lodash';

import { BREAKPOINT_KEY, BREAKPOINT_VALUE } from '../styled/breakpoint';
import { Palette, Theme } from '../types/theme';
import createSpacing from '../utils/spacing';

import { colors } from './colors';

const PALETTE: Palette = {
   mode: 'light',
   common: {
      black: '#000000',
      white: '#FFFFFF',
   },
   disabled: {
      backgroundColor: '#f5f5f5',
      color: '#00000040',
      borderColor: '#d9d9d9',
   },

   primary: {
      main: colors.blue[500],
      light: colors.blue[400],
      dark: colors.blue[700],
      contrastText: '#FFFFFF',
   },

   secondary: {
      main: colors.pink[500],
      light: colors.pink[300],
      dark: colors.pink[700],
      contrastText: '#FFFFFF',
   },

   error: {
      main: colors.red[500],
      light: colors.red[300],
      dark: colors.red[700],
      ...colors.red,
      contrastText: '#FFFFFF',
   },

   warning: {
      main: colors.amber[500],
      light: colors.amber[300],
      dark: colors.amber[700],
      contrastText: '#FFFFFF',
   },

   success: {
      main: colors.green[500],
      light: colors.green[300],
      dark: colors.green[700],
      contrastText: '#FFFFFF',
   },

   info: {
      main: colors.indigo[500],
      light: colors.indigo[300],
      dark: colors.indigo[700],
      contrastText: '#FFFFFF',
   },

   text: {
      primary: colors.slate[900],
      secondary: colors.slate[600],
      disabled: colors.slate[400],
      icon: colors.slate[500],
      textColor: colors.slate[900],
   },
   ...colors,
};

export const DEFAULT_THEME: Theme = {
   palette: PALETTE,
   breakpoints: {
      keys: Object.values(BREAKPOINT_KEY),
      values: BREAKPOINT_VALUE,
      unit: 'px',
   },

   components: {},
   pxToRem: (px: number) => {
      return `${px / 16}rem`;
   },
   spacing: createSpacing(8),

   unstable_sxConfig: {},
   __createdByCreateTheme: true,
};

// Theme hiện tại sẽ lưu trữ theme đang dùng (mặc định là DEFAULT_THEME)
let currentTheme = DEFAULT_THEME;

// Hàm để cập nhật theme (ví dụ: khi dùng theme tùy chỉnh)
export function setTheme(newTheme: Partial<typeof DEFAULT_THEME>) {
   currentTheme = _.merge(DEFAULT_THEME, newTheme);

   return currentTheme;
}

export function getTheme() {
   return currentTheme;
}
