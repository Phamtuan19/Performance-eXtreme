import type { CSSObject } from 'styled-components';
import type { Keyframes } from 'styled-components/dist/types';

import type { DeepOptional } from '../helpers';

import type { Breakpoints } from './breakpoints';
import type { Palette } from './color';
import type { Components } from './components';
import type { SxConfigProps } from './css';

export type ThemeSize = 'small' | 'medium' | 'large';

export type ThemeVariant = 'container' | 'text' | 'outlined';

export interface Theme {
   palette: Palette;
   breakpoints: Breakpoints;
   components: Components;
   typography: {
      htmlFontSize: number;
      fontSize: number | string;
      pxToRem: (px: number) => string;
   };
   spacing: {
      unit: number;
      spacingFn: (value: number) => string | number;
   };
   shadows: string[];
   shape: {
      borderRadius: number;
   };
   keyframes: {
      spinnerSpin: Keyframes;
      animation: {
         durations: {
            fast: string;
            normal: string;
            slow: string;
         };
         easings: {
            in: string;
            out: string;
            inOut: string;
         };
      };
   };
   zIndex: {
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      backdrop: number;
      modal: number;
      popover: number;
      tooltip: number;
   };

   sxConfig: (options: SxConfigProps, base?: CSSObject) => CSSObject;

   unstable_sxConfig: unknown;
   __createdByCreateTheme: boolean;
}

export type ThemeOptions = DeepOptional<Theme>;

type SafeBreakpoints = DeepOptional<Omit<Breakpoints, 'generateBreakpoints'>> & {
   values?: Partial<Record<string, number | undefined>>;
};

type SafeTypography = DeepOptional<Omit<Theme['typography'], 'spacingFn'>>;

export interface ThemeOptionsSafe
   extends DeepOptional<Omit<ThemeOptions, 'breakpoints' | 'unstable_sxConfig' | 'typography'>> {
   breakpoints?: SafeBreakpoints;

   typography?: SafeTypography;
}
