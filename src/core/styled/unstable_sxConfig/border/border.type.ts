import { StandardCSSProperties, StyleFunction } from '@/core/types';

export type BorderConfigValue = {
   keys?: string | readonly string[];
   transform?: StyleFunction<string | undefined> | string;
};

export type Borders = {
   readonly [key: string]: BorderConfigValue;
};

export type BordersConfig = {
   border?: StandardCSSProperties['border'];

   borderWidth?: StandardCSSProperties['borderWidth'];

   borderStyle?: StandardCSSProperties['borderStyle'];

   borderTop?: StandardCSSProperties['borderTop'];

   borderRight?: StandardCSSProperties['borderRight'];

   borderBottom?: StandardCSSProperties['borderBottom'];

   borderLeft?: StandardCSSProperties['borderLeft'];

   borderRadius?: StandardCSSProperties['borderRadius'];

   outline?: StandardCSSProperties['outline'];

   outlineColor?: StandardCSSProperties['outlineColor'];

   outlineWidth?: StandardCSSProperties['outlineWidth'];

   outlineStyle?: StandardCSSProperties['outlineStyle'];
};
