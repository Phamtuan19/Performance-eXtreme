// Re-export everything from all packages for easy imports
export * from '@pui/core';
export * from '@pui/theme';
export * from '@pui/icons';
export * from '@pui/components';

// Additional convenience exports
export { createThemeOption, ThemeProvider, useTheme } from '@pui/theme';
export { cn, removeNullProps } from '@pui/core';

// Default theme export for quick setup
export { getTheme as getDefaultTheme } from '@pui/theme';
