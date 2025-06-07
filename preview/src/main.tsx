import { createThemeOption, ThemeProvider } from '@pui/theme';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

const theme = createThemeOption({});

createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>,
);
