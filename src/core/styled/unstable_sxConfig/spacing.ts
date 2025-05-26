import { StandardCSSProperties } from '@/core/types';

export type SpacingKey = {
   [key: string]: { keys: string | string[]; transform: 'spacing' };
};

/**
 * Cấu hình các key padding hỗ trợ trong hệ thống spacing.
 * Mỗi key ánh xạ đến một hoặc nhiều CSS property và áp dụng transform 'spacing'.
 */
export const paddingSpacingKey: SpacingKey = {
   p: { keys: 'padding', transform: 'spacing' },
   pt: { keys: 'paddingTop', transform: 'spacing' },
   pr: { keys: 'paddingRight', transform: 'spacing' },
   pb: { keys: 'paddingBottom', transform: 'spacing' },
   pl: { keys: 'paddingLeft', transform: 'spacing' },
   px: { keys: ['paddingLeft', 'paddingRight'], transform: 'spacing' },
   py: { keys: ['paddingTop', 'paddingBottom'], transform: 'spacing' },
   paddingX: { keys: ['paddingLeft', 'paddingRight'], transform: 'spacing' },
   paddingY: { keys: ['paddingTop', 'paddingBottom'], transform: 'spacing' },
   paddingTop: { keys: 'paddingTop', transform: 'spacing' },
   paddingRight: { keys: 'paddingRight', transform: 'spacing' },
   paddingBottom: { keys: 'paddingBottom', transform: 'spacing' },
   paddingLeft: { keys: 'paddingLeft', transform: 'spacing' },
};

/**
 * Cấu hình các key margin hỗ trợ trong hệ thống spacing.
 * Mỗi key ánh xạ đến một hoặc nhiều CSS property và áp dụng transform 'spacing'.
 */
export const marginSpacingKey: SpacingKey = {
   m: { keys: 'margin', transform: 'spacing' },
   mt: { keys: 'marginTop', transform: 'spacing' },
   mr: { keys: 'marginRight', transform: 'spacing' },
   mb: { keys: 'marginBottom', transform: 'spacing' },
   ml: { keys: 'marginLeft', transform: 'spacing' },
   mx: { keys: ['marginLeft', 'marginRight'], transform: 'spacing' },
   my: { keys: ['marginTop', 'marginBottom'], transform: 'spacing' },
   marginX: { keys: ['marginLeft', 'marginRight'], transform: 'spacing' },
   marginY: { keys: ['marginTop', 'marginBottom'], transform: 'spacing' },
   marginTop: { keys: 'marginTop', transform: 'spacing' },
   marginRight: { keys: 'marginRight', transform: 'spacing' },
   marginBottom: { keys: 'marginBottom', transform: 'spacing' },
   marginLeft: { keys: 'marginLeft', transform: 'spacing' },
};

/**
 * Gộp tất cả các key spacing (padding + margin) lại thành một đối tượng duy nhất.
 */
export const spacingKey: SpacingKey = {
   ...paddingSpacingKey,
   ...marginSpacingKey,
};

export type SpacingKeyName = keyof typeof spacingKey;

export type SpacingProps = {
   [K in SpacingKeyName]?: number | string;
};

export type SpacingConfig = {
   // Margin
   m?: StandardCSSProperties['margin'] | number | string;

   mt?: StandardCSSProperties['marginTop'] | number | string;

   mr?: StandardCSSProperties['marginRight'] | number | string;

   mb?: StandardCSSProperties['marginBottom'] | number | string;

   ml?: StandardCSSProperties['marginLeft'] | number | string;

   mx?: StandardCSSProperties['marginLeft']; // cả mx và my sẽ apply lên 2 phía, ta sẽ xử lý trong hàm conver | number | stringt

   my?: StandardCSSProperties['marginTop'] | number | string;

   margin?: StandardCSSProperties['margin'] | number | string;

   marginTop?: StandardCSSProperties['marginTop'] | number | string;

   marginRight?: StandardCSSProperties['marginRight'] | number | string;

   marginBottom?: StandardCSSProperties['marginBottom'] | number | string;

   marginLeft?: StandardCSSProperties['marginLeft'] | number | string;

   marginX?: StandardCSSProperties['marginLeft'] | number | string;

   marginY?: StandardCSSProperties['marginTop'] | number | string;

   // Padding
   p?: StandardCSSProperties['padding'] | number | string;

   pt?: StandardCSSProperties['paddingTop'] | number | string;

   pr?: StandardCSSProperties['paddingRight'] | number | string;

   pb?: StandardCSSProperties['paddingBottom'] | number | string;

   pl?: StandardCSSProperties['paddingLeft'] | number | string;

   px?: StandardCSSProperties['paddingLeft'] | number | string;

   py?: StandardCSSProperties['paddingTop'] | number | string;

   padding?: StandardCSSProperties['padding'] | number | string;

   paddingTop?: StandardCSSProperties['paddingTop'] | number | string;

   paddingRight?: StandardCSSProperties['paddingRight'] | number | string;

   paddingBottom?: StandardCSSProperties['paddingBottom'] | number | string;

   paddingLeft?: StandardCSSProperties['paddingLeft'] | number | string;

   paddingX?: StandardCSSProperties['paddingLeft'] | number | string;

   paddingY?: StandardCSSProperties['paddingTop'] | number | string;
};
