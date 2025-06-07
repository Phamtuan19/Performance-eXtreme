import React from 'react';
import type { Theme } from './types';
interface PXThemeProviderProps {
    children: React.ReactNode;
    theme: Theme;
}
declare const ThemeProvider: (props: PXThemeProviderProps) => React.JSX.Element;
export { ThemeProvider };
