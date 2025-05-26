import { merge } from 'lodash';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Theme } from '@/core/types';

import { DEFAULT_THEME } from '../theme';

interface PXThemeProviderProps {
   children: React.ReactNode;
   theme: Theme;
}

const ThemeProvider = (props: PXThemeProviderProps) => {
   const { theme: userTheme, children } = props;

   // Development environment checks for theme validity
   if (process.env.NODE_ENV !== 'production') {
      if (typeof userTheme === 'function') {
         // eslint-disable-next-line no-console
         console.error(
            [
               'LOTUS: You are providing a theme function prop to the ThemeProvider component:',
               '<ThemeProvider theme={outerTheme => outerTheme} />',
               '',
               'However, no outer theme is present.',
               'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.',
            ].join('\n'),
         );
      }
   }

   const mergedTheme = merge(DEFAULT_THEME, userTheme || {});

   return <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider };
