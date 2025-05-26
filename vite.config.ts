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
      },
      rollupOptions: {
         external: ['react', 'react-dom', 'styled-components'],
         output: {
            globals: {
               react: 'React',
               'react-dom': 'ReactDOM',
               'styled-components': 'styled',
            },
         },
      },
   },
});
