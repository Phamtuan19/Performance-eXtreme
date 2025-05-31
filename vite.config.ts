// vite.config.ts
import { defineConfig } from 'vite';
import { baseConfig } from './config/vite.base';
import path from 'path';

export default defineConfig({
   ...baseConfig,
   build: {
      lib: {
         entry: path.resolve(__dirname, 'src/index.ts'),
         name: 'PXUI',
         fileName: (format) => `px-ui.${format}.js`,
         formats: ['es', 'umd', 'cjs'],
      },
      rollupOptions: {
         external: ['react', 'react-dom', 'styled-components'],
         output: {
            // manualChunks: {
            //    react: ['react', 'react-dom'],
            //    lodash: ['lodash'],
            //    ui: ['@your-scope/px-ui'],
            // },
            globals: {
               react: 'React',
               'react-dom': 'ReactDOM',
               'styled-components': 'styled',
            },
         },
      },
      minify: 'terser',
      terserOptions: {
         compress: true,
      },
   },
});
