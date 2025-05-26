import { getTheme } from '@/core/theme';
import { StandardCSSProperties } from '@/core/types';
import { isColorCode, isValidCssColor } from '@/core/utils';

export const transformColorFn = (value: unknown) => {
   const theme = getTheme();

   if (!value) {
      return '';
   }

   if (typeof value !== 'string') {
      return String(value);
   }

   if (isColorCode(value) || isValidCssColor(value)) {
      return value;
   }

   if (!theme || !theme.palette) {
      return value;
   }

   const keys = value.replace(/\[|\]/g, '').split('.');

   let color = theme.palette;
   for (const key of keys) {
      if (color[key] !== undefined) {
         color = color[key];
      } else {
         // eslint-disable-next-line no-console
         console.error(
            `⚠️ Color not found: '${value}' does not exist in theme.palette.\n` +
               `   → Using default color instead.\n` +
               `   → Please check your theme configuration.`,
         );
         return value;
      }
   }

   return color;
};

export const colors = {
   color: {
      keys: 'color',
      themeKey: 'palette',
      transform: transformColorFn,
   },
   bgColor: {
      keys: 'backgroundColor',
      themeKey: 'palette',
      transform: transformColorFn,
   },
   backgroundColor: {
      keys: 'backgroundColor',
      themeKey: 'palette',
      transform: transformColorFn,
   },
};

export type ColorConfig = {
   color?: StandardCSSProperties['color'];

   backgroundColor?: StandardCSSProperties['backgroundColor'];

   bgColor?: StandardCSSProperties['backgroundColor'];

   borderColor?: StandardCSSProperties['borderColor'];

   outlineColor?: StandardCSSProperties['outlineColor'];

   textColor?: StandardCSSProperties['color'];

   textDecorationColor?: StandardCSSProperties['textDecorationColor'];

   caretColor?: StandardCSSProperties['caretColor'];

   textEmphasisColor?: StandardCSSProperties['textEmphasisColor'];

   textDecoration?: StandardCSSProperties['textDecoration'];

   textDecorationLine?: StandardCSSProperties['textDecorationLine'];

   textDecorationStyle?: StandardCSSProperties['textDecorationStyle'];

   textDecorationThickness?: StandardCSSProperties['textDecorationThickness'];

   textUnderlineOffset?: StandardCSSProperties['textUnderlineOffset'];

   textUnderlinePosition?: StandardCSSProperties['textUnderlinePosition'];
};
