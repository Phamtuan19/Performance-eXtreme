// Re-export everything from sub-packages
export * from '@pui/core';
export * from '@pui/theme';
export * from '@pui/icons';
export * from '@pui/components';

// For backward compatibility, also export original structure
export * from './components/atoms';

import type { Theme, ThemeOptions } from '@pui/theme';
import { ThemeProvider, createThemeOption } from '@pui/theme';

export type { Theme, ThemeOptions };

export { ThemeProvider, createThemeOption };
