// config/vite.base.ts
import { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export const baseConfig = {
   plugins: [react()] as PluginOption[],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, '../src'),
         '@core': path.resolve(__dirname, '../src/core'),
         '@components': path.resolve(__dirname, '../src/components'),
         '@theme': path.resolve(__dirname, '../src/theme'),
         // '@utils': path.resolve(__dirname, '../src/utils'),
         '@hooks': path.resolve(__dirname, '../src/hooks'),
         '@icons': path.resolve(__dirname, '../src/icons'),
         '@types': path.resolve(__dirname, '../src/types'),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@use "src/theme/variables.scss" as *;`, // nếu bạn dùng SCSS
         },
      },
   },
};
