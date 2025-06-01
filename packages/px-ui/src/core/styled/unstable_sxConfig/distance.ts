import type { StandardCSSProperties } from '@pui/material/types';

type DistanceKey =
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

type DistanceValue = {
   keys?: string;
   transform?: 'spacing';
};

type Distance = {
   [key in DistanceKey]: DistanceValue;
};

const distance: Distance = {
   width: {
      keys: 'width',
      transform: 'spacing',
   },
   minWidth: {
      keys: 'minWidth',
      transform: 'spacing',
   },
   maxWidth: {
      keys: 'maxWidth',
      transform: 'spacing',
   },
   height: {
      keys: 'height',
      transform: 'spacing',
   },
   minHeight: {
      keys: 'minHeight',
      transform: 'spacing',
   },
   maxHeight: {
      keys: 'maxHeight',
      transform: 'spacing',
   },
   top: {},
   right: {},
   bottom: {},
   left: {},
};

export type DistanceConfig = {
   //    width?: CSS.PropertiesFallback['width'];
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

export default distance;
