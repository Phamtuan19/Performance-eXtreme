/* eslint-disable @typescript-eslint/no-explicit-any */
import * as CSS from 'csstype';
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
} from '@/components/atoms';

import { UnstableSxConfigProps } from '../styled';
import { BreakpointKey } from '../styled/breakpoint';
import {
   VARIANTS_TYPOGRAPHY,
   PxComponentButton,
   PxComponentBox,
   PxComponentTypography,
   PxComponentInput,
} from '../theme';
import { DeepOptional } from '../utils';

/** Hàm kiểu function nhận props và trả về bất kỳ kiểu style nào */
export type StyleFunction<Props> = (props: Props) => any;

/** Cấu trúc màu cơ bản cho palette (primary, secondary, error...) */
export type PaletteColor = {
   main: string;
   light?: string;
   dark?: string;
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
      [key: string]: any;
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

/** Định nghĩa cho từng component: defaultProps, variants, style base */
export type ComponentStyle = {
   defaultProps?: Record<string, any>;
   variants?: Record<string, any>;
   styleOverrides?: Record<string, any>;
};

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

/** Mapping tên component -> style định nghĩa */
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
};

/** Theme chuẩn dùng trong hệ thống */
export interface Theme {
   palette: Palette;
   breakpoints: Breakpoints;
   components?: Components;
   pxToRem: (px: number) => string;
   spacing: (value: number) => string | number;
   unstable_sxConfig?: Record<string, any>;
   __createdByCreateTheme?: boolean;
}

/** Tuỳ chọn khi khởi tạo theme */
export type ThemeOptions = DeepOptional<Theme>;

/** Kiểu CSS hỗ trợ fallback và number | string */
export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;

/**
 * Tập hợp toàn bộ các CSS property, bao gồm cả props mở rộng từ `sxConfig`
 */
export interface AllConfigCSSProperties
   extends Omit<StandardCSSProperties, keyof UnstableSxConfigProps>,
      UnstableSxConfigProps {}

/**
 * Giá trị hỗ trợ responsive dưới dạng object với breakpoint
 * Ví dụ: { xs: 10, md: 20 }
 */
export type ResponsiveStylesValue<T> = Partial<Record<BreakpointKey, T>>;

/**
 * Hỗ trợ nhiều dạng responsive value: object, array hoặc trực tiếp
 */
export type ResponsiveValue<T> =
   | T
   | Array<T | null>
   | {
        xs?: T;
        sm?: T;
        md?: T;
        lg?: T;
        xl?: T;
     };

/**
 * Định nghĩa một object CSS có khả năng responsive
 */
type StyledCSSProperties = {
   [K in keyof AllConfigCSSProperties]?: ResponsiveValue<AllConfigCSSProperties[K]>;
};

/**
 * CSS object hỗ trợ selector lồng nhau và responsive
 * Dùng cho nội bộ hệ thống style engine
 */
export interface NestedCSSObject extends StyledCSSProperties {
   [selector: string]: StyledCSSProperties | NestedCSSObject | ResponsiveValue<any> | undefined;
}

/**
 * Kiểu dữ liệu `sx` hỗ trợ 3 dạng:
 * 1. Object thông thường
 * 2. Array nhiều object
 * 3. Callback nhận `theme` => object
 */
export type SxProps<Theme = any> = CSSObject | ((theme: Theme) => CSSObject);

/**
 * Props mở rộng cho bất kỳ component nào dùng hệ thống `sx`
 */
export type SxConfigProps = StyledCSSProperties & {
   sx?: SxProps<Theme>;
};
