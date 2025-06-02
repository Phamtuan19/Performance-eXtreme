import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
   {
      input: 'src/index.ts',
      output: [
         {
            file: 'dist/cjs/index.js',
            format: 'cjs',
            sourcemap: true,
            name: 'react-ts-lib',
         },
         {
            file: 'dist/esm/index.js',
            format: 'esm',
            sourcemap: true,
         },
      ],
      plugins: [external(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), postcss(), terser()],
   },
   {
      input: 'src/index.ts', // ✅ Sửa ở đây
      output: [{ file: 'dist/index.d.ts', format: 'es' }],
      external: [/\.css$/],
      plugins: [dts()],
   },
];
