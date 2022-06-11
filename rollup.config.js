import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.module, format: 'es', name: pkg.name, sourcemap: true },
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
    },
  ],
  plugins: [
    svelte({
      include: 'src/components/**/*.svelte',
      compilerOptions: {
        generate: 'ssr',
        hydratable: true,
      }
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
