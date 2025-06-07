import type { Breakpoints, Palette, Theme, ThemeColor, ThemeOptionsSafe } from './types';
export declare const THEME_COLORS: ThemeColor[];
declare const DEFAULT_THEME: {
    sxConfig: () => {};
    spacing: {
        unit: number;
        spacingFn: (value: number) => string | number;
    };
    palette: Palette;
    breakpoints: Breakpoints;
    components: import("./types").Components;
    typography: {
        htmlFontSize: number;
        fontSize: number | string;
        pxToRem: (px: number) => string;
    };
    shadows: string[];
    shape: {
        borderRadius: number;
    };
    keyframes: {
        spinnerSpin: import("styled-components/dist/types").Keyframes;
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
    unstable_sxConfig: unknown;
    __createdByCreateTheme: boolean;
};
/**
 * Function to update the theme (e.g., when using a custom theme)
 * @param newTheme - Partial theme object to override defaults
 * @returns The updated merged theme
 */
export declare function setTheme(newTheme: Partial<typeof DEFAULT_THEME>): {
    sxConfig: () => {};
    spacing: {
        unit: number;
        spacingFn: (value: number) => string | number;
    };
    palette: Palette;
    breakpoints: Breakpoints;
    components: import("./types").Components;
    typography: {
        htmlFontSize: number;
        fontSize: number | string;
        pxToRem: (px: number) => string;
    };
    shadows: string[];
    shape: {
        borderRadius: number;
    };
    keyframes: {
        spinnerSpin: import("styled-components/dist/types").Keyframes;
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
    unstable_sxConfig: unknown;
    __createdByCreateTheme: boolean;
};
/**
 * Function to get the current theme
 * @returns The current theme object
 */
export declare function getTheme(): Theme;
export declare const createThemeOption: (options: ThemeOptionsSafe) => Theme;
export {};
