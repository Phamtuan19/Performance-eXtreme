// Re-export everything from sub-packages for convenience
export * from '@pui/core';
export * from '@pui/theme';
export * from '@pui/icons';
export * from '@pui/components';

// Main exports for theme
import { ThemeProvider, createThemeOption, getTheme } from '@pui/theme';
import type { Theme, ThemeOptions } from '@pui/theme';

export { ThemeProvider, createThemeOption, getTheme };
export type { Theme, ThemeOptions };
