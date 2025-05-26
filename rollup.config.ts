import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json';

module.exports = [
   {
      input: 'src/index.ts',
      output: [
         {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
         },
         {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
         },
         {
            file: packageJson.browser,
            format: 'umd',
            name: 'PXUI',
            globals: {
               react: 'React',
               'react-dom': 'ReactDOM',
               'styled-components': 'styled',
            },
            sourcemap: true,
         },
      ],
      external: ['react', 'react-dom', 'styled-components'],
      plugins: [
         peerDepsExternal(),
         resolve(),
         commonjs(),
         typescript({
            tsconfig: './tsconfig.json',
            outDir: 'dist',
            declaration: false,
         }),
         terser(),
      ],
   },
   {
      input: 'src/index.ts',
      output: {
         file: 'dist/index.d.ts',
         format: 'es',
      },
      plugins: [dts()],
   },
];
