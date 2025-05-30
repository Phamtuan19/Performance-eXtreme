import type { CSSObject } from 'styled-components';

import type { StandardCSSProperties } from '@PUI/types';

import type { UnstableSxConfigProps } from '../styled';

import type { BreakpointKey } from './breakpoints';
import type { Theme } from './themeCore';

export interface AllConfigCSSProperties
   extends Omit<StandardCSSProperties, keyof UnstableSxConfigProps>,
      UnstableSxConfigProps {}

export type ResponsiveValue<T> = T | Array<T | null> | Partial<Record<BreakpointKey, T>>;

export type ResponsiveCSSObject = {
   [K in keyof CSSObject]?: ResponsiveValue<CSSObject[K]>;
};

export type SxProps<Theme> =
   | ResponsiveCSSObject
   | ((theme: Theme) => ResponsiveCSSObject)
   | Array<ResponsiveCSSObject | ((theme: Theme) => ResponsiveCSSObject)>;

export type SxConfigProps = AllConfigCSSProperties & {
   sx?: SxProps<Omit<Theme, 'sxConfig'>>;
};
