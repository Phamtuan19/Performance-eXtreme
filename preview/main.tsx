import ReactDOM from 'react-dom/client';
import { createThemeOption, ThemeProvider } from '@PUI/core';
import { createGlobalStyle } from 'styled-components';

import App from './app';

const myTheme = createThemeOption({
   components: {
      PXButton: {
         defaultProps: {},
         styleOverrides: {
            color: {
               error: {},
            },
         },
      },
      PXAvatar: {
         styleOverrides: {
            root: {
               //    width: 500,
            },
            color: {},
         },
      },
   },
});

const GlobalStyled = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={myTheme}>
      <GlobalStyled />
      <App />
   </ThemeProvider>,
);
