import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@PUI': path.resolve(__dirname, 'packages/px-ui/src'),
         '@PUI/core': path.resolve(__dirname, 'packages/px-ui/src/core'),
         '@PUI/components': path.resolve(__dirname, 'packages/px-ui/src/components'),
         '@PUI/hooks': path.resolve(__dirname, 'packages/px-ui/src/hooks'),
         '@PUI/types': path.resolve(__dirname, 'packages/px-ui/src/types'),

         '@preview': path.resolve(__dirname, 'preview/src'),
         '@playground': path.resolve(__dirname, 'playground/src'),
      },
   },
});
