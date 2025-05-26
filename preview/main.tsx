import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from '@/core/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={{}}>
      <App />
   </ThemeProvider>,
);
