import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'es',
    name: 'animex',
  },
  external: ['react', 'react-dom', 'animejs'],
  plugins: [typescript({ tsconfig: 'tsconfig.json' })],
});
