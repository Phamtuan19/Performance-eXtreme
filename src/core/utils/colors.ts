import { THEME_COLORS } from '../theme';
import type { ThemeColor } from '../types';

export const isColorCode = (value: unknown) => {
   if (typeof value !== 'string') return false;

   // Kiểm tra HEX (#fff, #ffffff, #ffffffff)
   const hexColor = /^#([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

   // Kiểm tra RGB hoặc RGBA
   const rgbColor = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|0?\.\d+|1(\.0+)?))?\s*\)$/;

   // Kiểm tra HSL hoặc HSLA
   const hslColor = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*(0|0?\.\d+|1(\.0+)?))?\s*\)$/;

   return hexColor.test(value) || rgbColor.test(value) || hslColor.test(value);
};

export const isValidCssColor = (value: string): boolean => {
   return CSS.supports('color', value);
};

export function hexToRgba(hex: string, alpha: number = 1) {
   // Loại bỏ ký tự # nếu có
   hex = hex.replace('#', '');

   // Chuyển đổi sang R, G, B
   const r = parseInt(hex.substring(0, 2), 16);
   const g = parseInt(hex.substring(2, 4), 16);
   const b = parseInt(hex.substring(4, 6), 16);

   // Trả về chuỗi RGBA
   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const isThemeColor = (c: string): c is ThemeColor => (THEME_COLORS as readonly string[]).includes(c);
