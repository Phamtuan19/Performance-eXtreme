import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@pui/core': path.resolve(__dirname, '../packages/core/src'),
         '@pui/theme': path.resolve(__dirname, '../packages/theme/src'),
         '@pui/icons': path.resolve(__dirname, '../packages/icons/src'),
         '@pui/components': path.resolve(__dirname, '../packages/components/src'),
         '@pui/material': path.resolve(__dirname, '../packages/material/src'),
      },
   },
   server: {
      port: 8088,
   },
});
