import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@pui/material': path.resolve(__dirname, '../packages/px-ui/src'),
      },
   },
   server: {
      port: 3000,
   },
});
