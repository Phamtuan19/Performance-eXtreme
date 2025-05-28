import { CSSObject } from 'styled-components';

import {
   PXComponentCheckbox,
   PXComponentRadio,
   PXComponentSwitch,
   PXComponentAvatar,
   PXComponentBadge,
   PXComponentDivider,
   PXComponentTooltip,
   PXComponentSpinner,
   PXComponentSelect,
} from '@/components/atoms';
import { StandardCSSProperties } from '@/types';

import { UnstableSxConfig, UnstableSxConfigProps } from '../styled';
import { BreakpointKey } from '../styled/breakpoint';
import {
   VARIANTS_TYPOGRAPHY,
   PxComponentButton,
   PxComponentBox,
   PxComponentTypography,
   PxComponentInput,
} from '../theme';
import { DeepOptional } from '../utils';

/** Cấu trúc màu cơ bản cho palette (primary, secondary, error...) */
export type PaletteColor = {
   main: string;
   light: string;
   dark: string;
   contrastText: string;
};

/** Cấu trúc màu cho text: màu chính, phụ, trạng thái disable... */
export type TextColors = {
   primary: string;
   secondary: string;
   disabled: string;
   icon: string;
   textColor: string;
   [key: string]: string;
};

/** Định nghĩa tổng thể các màu theme */
export type Palette = {
   mode: 'light' | 'dark';
   common: {
      black: string;
      white: string;
      [key: string]: string;
   };
   primary: PaletteColor;
   secondary: PaletteColor;
   error: PaletteColor;
   warning: PaletteColor;
   success: PaletteColor;
   info: PaletteColor;
   text: TextColors;
   disabled: {
      backgroundColor: string;
      color: string;
      borderColor: string;
   };
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   [key: string]: any;
};

export type ThemeColor = keyof Pick<Palette, 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info'>;

export type ThemeSize = 'small' | 'medium' | 'large';

export type ThemeVariant = 'outline' | 'filled' | 'standard';

/** Định nghĩa breakpoint dùng trong responsive */
export type Breakpoints = {
   keys: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl' | string>;
   values: Record<string, number>;
   unit: string;
};

/** Cấu trúc từng kiểu typography */
export type TypographyVariant = keyof typeof VARIANTS_TYPOGRAPHY.VARIANTS;

export interface PXComponentTextarea {
   defaultProps: {
      autoExpand: boolean;
      error: boolean;
      disabled: boolean;
      resize: 'none' | 'both' | 'horizontal' | 'vertical';
   };
   styleOverrides: {
      root: CSSObject;
   };
}

export type Components = {
   PXButton?: Partial<PxComponentButton>;
   PXBox?: Partial<PxComponentBox>;
   PXTypography?: Partial<PxComponentTypography>;
   PXInput?: Partial<PxComponentInput>;
   PXTextarea?: Partial<PXComponentTextarea>;
   PXCheckBox?: Partial<PXComponentCheckbox>;
   PXRadio?: Partial<PXComponentRadio>;
   PXSwitch?: Partial<PXComponentSwitch>;
   PXAvatar?: Partial<PXComponentAvatar>;
   PXBadge?: Partial<PXComponentBadge>;
   PXDivider?: Partial<PXComponentDivider>;
   PXTooltip?: Partial<PXComponentTooltip>;
   PXSpinner?: Partial<PXComponentSpinner>;
   PXSelect?: Partial<PXComponentSelect>;
};

/** Theme chuẩn dùng trong hệ thống */
export interface Theme {
   palette: Palette;
   breakpoints: Breakpoints;
   components?: Components;
   pxToRem: (px: number) => string;
   spacing: (value: number) => string | number;
   unstable_sxConfig?: UnstableSxConfig;
   __createdByCreateTheme?: boolean;
}

/** Tuỳ chọn khi khởi tạo theme */
export type ThemeOptions = DeepOptional<Theme>;

/**
 * Tập hợp toàn bộ các CSS property, bao gồm cả props mở rộng từ `sxConfig`
 */
export interface AllConfigCSSProperties
   extends Omit<StandardCSSProperties, keyof UnstableSxConfigProps>,
      UnstableSxConfigProps {}

/**
 * Hỗ trợ nhiều dạng responsive value: object, array hoặc trực tiếp
 */
export type ResponsiveValue<T> = T | Array<T | null> | Partial<Record<BreakpointKey, T>>;

/**
 * Định nghĩa một object CSS có khả năng responsive
 * 1 giá trị có thể là giá trị trực tiếp, array, hoặc object theo breakpoint
 * @example
 *  {
 *  color: 'red', // giá trị trực tiếp
 *  margin: ['10px', '20px', null, '30px'], // array với giá trị cho từng breakpoint
 *  padding: {
 *   xs: '5px', // giá trị cho breakpoint xs
 *   sm: '10px', // giá trị cho breakpoint sm
 *   md: '15px', // giá trị cho breakpoint md
 *   lg: '20px', // giá trị cho breakpoint lg
 *  }
 */
type ResponsiveCSSObject = {
   [K in keyof CSSObject]?: ResponsiveValue<CSSObject[K]>;
};

/**
 * Kiểu dữ liệu `sx` hỗ trợ 3 dạng:
 * 1. Object thông thường (chưa hỗ trợ responsive)
 * 2. Array nhiều object (chưa hỗ trợ responsive)
 * 3. Callback nhận `theme` => object
 */
export type SxProps<Theme> =
   | ResponsiveCSSObject
   | ((theme: Theme) => ResponsiveCSSObject)
   | Array<ResponsiveCSSObject | ((theme: Theme) => ResponsiveCSSObject)>;

/**
 * Props mở rộng cho bất kỳ component nào dùng hệ thống `sx`
 */
export type SxConfigProps = AllConfigCSSProperties & {
   sx?: SxProps<Theme>;
};
