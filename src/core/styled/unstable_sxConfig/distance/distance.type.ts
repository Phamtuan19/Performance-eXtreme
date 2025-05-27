import { StandardCSSProperties } from '@/types';

export type DistanceKey =
   | 'width'
   | 'minWidth'
   | 'maxWidth'
   | 'height'
   | 'minHeight'
   | 'maxHeight'
   | 'top'
   | 'right'
   | 'bottom'
   | 'left';

export type DistanceValue = {
   keys?: string;
   transform?: 'spacing';
};

export type Distance = {
   [key in DistanceKey]: DistanceValue;
};

export type DistanceConfig = {
   width?: StandardCSSProperties['width'];

   minWidth?: StandardCSSProperties['minWidth'];

   maxWidth?: StandardCSSProperties['maxWidth'];

   height?: StandardCSSProperties['height'];

   minHeight?: StandardCSSProperties['minHeight'];

   maxHeight?: StandardCSSProperties['maxHeight'];

   top?: StandardCSSProperties['top'];

   right?: StandardCSSProperties['right'];

   bottom?: StandardCSSProperties['bottom'];

   left?: StandardCSSProperties['left'];
};
