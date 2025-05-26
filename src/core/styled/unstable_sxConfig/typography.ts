import { StandardCSSProperties } from '@/core/types';

const typography = {
   fontFamily: {},
   fontSize: {},
   fontStyle: {},
   fontWeight: {},
};

export type TypographyConfig = {
   fontFamily?: StandardCSSProperties['fontFamily'];

   fontSize?: StandardCSSProperties['fontSize'] | string | number;

   fontStyle?: StandardCSSProperties['fontStyle'];

   fontWeight?: StandardCSSProperties['fontWeight'] | number;

   fontVariant?: StandardCSSProperties['fontVariant'];

   fontVariantNumeric?: StandardCSSProperties['fontVariantNumeric'];

   fontStretch?: StandardCSSProperties['fontStretch'];

   fontSynthesis?: StandardCSSProperties['fontSynthesis'];

   fontSizeAdjust?: StandardCSSProperties['fontSizeAdjust'];

   fontKerning?: StandardCSSProperties['fontKerning'];

   fontLanguageOverride?: StandardCSSProperties['fontLanguageOverride'];

   fontOpticalSizing?: StandardCSSProperties['fontOpticalSizing'];

   fontSmooth?: StandardCSSProperties['fontSmooth'];

   fontFeatureSettings?: StandardCSSProperties['fontFeatureSettings'];
};

export default typography;
