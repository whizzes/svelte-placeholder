import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

import pkg from './package.json';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.module, format: 'es', name, sourcemap: true },
    {
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: true,
    },
    {
      file: pkg.main.replace('.js', '.min.js'),
      format: 'iife',
      name,
      plugins: [terser()],
    },
  ],
  plugins: [
    svelte({
      emitCss: true,
      include: ['src/components/**/*.svelte'],
      compilerOptions: {
        generate: 'ssr',
        hydratable: true,
      },
    }),
    typescript({
      rootDir: './src',
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
    resolve({
      browser: true,
    }),
    commonjs({
      transformMixedEsModules: true,
    }),
  ],
};
