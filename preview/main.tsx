import ReactDOM from 'react-dom/client';

import { createThemeOption, ThemeProvider } from '@PUI/core';

import App from './app';

const myTheme = createThemeOption({
   components: {
      PXButton: {
         defaultProps: {
            color: 'error',
         },
      },
   },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={myTheme}>
      <App />
   </ThemeProvider>,
);
