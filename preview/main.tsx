import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@PUI/core';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={{}}>
      <App />
   </ThemeProvider>,
);
