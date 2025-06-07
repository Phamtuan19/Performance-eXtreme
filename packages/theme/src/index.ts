export * from './types';
export * from './color';
export * from './theme-default';
export * from './theme-provider';
export * from './create-breakpoint';
export * from './create-spacing';

// Explicit exports to ensure they are available
export { ThemeProvider } from './theme-provider';
export { createThemeOption, getTheme } from './theme-default';

// Simple useTheme hook implementation
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import type { Theme } from './types';

export const useTheme = (): Theme => {
   const theme = useContext(ThemeContext) as Theme;

   if (!theme) {
      throw new Error(
         'useTheme must be used within a ThemeProvider. ' + 'Make sure your component is wrapped with ThemeProvider.',
      );
   }

   return theme;
};
