import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@/core/theme';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={{}}>
      <App />
   </ThemeProvider>,
);
