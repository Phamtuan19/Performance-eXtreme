import { transformColorFn } from '../colors';

import { Borders } from './border.type';

const transformBorderFn = (borderValue: string | number | undefined): string => {
   if (borderValue === undefined || borderValue === null || borderValue === '') {
      return '';
   }

   // Nếu là number thì chuyển thành string có px solid luôn
   if (typeof borderValue === 'number') {
      return `${borderValue}px solid`;
   }

   // borderValue là string
   const borderParts = borderValue.trim().split(/\s+/);

   if (borderParts.length === 1) {
      const part = borderParts[0];
      if (!isNaN(Number(part))) {
         return `${part}px solid`;
      }
      return part;
   }

   if (borderParts.length < 3) {
      return borderValue;
   }

   const [width, style, ...colorParts] = borderParts;
   const colorValue = colorParts.join(' ');

   const color = transformColorFn(colorValue);

   return `${width} ${style} ${color}`;
};

export const borders: Borders = {
   border: {
      keys: 'border',
      transform: transformBorderFn,
   },
   borderWidth: {
      keys: 'borderWidth',
      transform: 'spacing',
   },
   borderStyle: {
      keys: 'borderStyle',
      transform: transformBorderFn,
   },
   borderTop: {
      keys: 'borderTop',
      transform: transformBorderFn,
   },
   borderRight: {
      keys: 'borderRight',
      transform: transformBorderFn,
   },
   borderBottom: {
      keys: 'borderBottom',
      transform: transformBorderFn,
   },
   borderLeft: {
      keys: 'borderLeft',
      transform: transformBorderFn,
   },
   borderRadius: {
      keys: 'borderRadius',
      transform: 'spacing',
   },
   outline: {
      keys: 'outline',
      transform: transformBorderFn,
   },
   outlineColor: {
      keys: 'outlineColor',
      transform: transformColorFn,
   },
   outlineWidth: {},
   outlineStyle: {},
} as const;

export const borderStyleCss = [
   'none',
   'solid',
   'dashed',
   'dotted',
   'double',
   'groove',
   'ridge',
   'inset',
   'outset',
] as const;
