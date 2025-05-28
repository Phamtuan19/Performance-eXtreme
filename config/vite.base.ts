// config/vite.base.ts
import path from 'path';

import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';

export const baseConfig = {
   plugins: [react()] as PluginOption[],
   resolve: {
      alias: {
         '@PUI/core': path.resolve(__dirname, '../src/core'),
         '@PUI/components': path.resolve(__dirname, '../src/components'),
         '@PUI/hooks': path.resolve(__dirname, '../src/hooks'),
         '@PUI/icons': path.resolve(__dirname, '../src/components/icons'),
         '@PUI/types': path.resolve(__dirname, '../src/types'),
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
