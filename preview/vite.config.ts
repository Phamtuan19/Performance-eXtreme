import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
   root: path.resolve(__dirname), // thư mục preview là root
   plugins: [react()],
   resolve: {
      alias: {
         '@PUI': path.resolve(__dirname, '../src'), // alias trỏ đến thư viện chính
      },
   },
   server: {
      port: 3000,
   },
   build: {
      outDir: 'dist', // thư mục build ra trong preview
   },
});
