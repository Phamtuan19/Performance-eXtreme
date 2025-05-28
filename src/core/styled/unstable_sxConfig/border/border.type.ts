import { Palette } from '@PUI/core/types';
import { StandardCSSProperties } from '@PUI/types';

export type BorderConfigValue = {
   keys?: string | readonly string[];
   transform?: string | ((props: string | undefined) => string | number) | ((value: unknown) => string | Palette);
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
