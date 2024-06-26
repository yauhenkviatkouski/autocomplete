import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import packageJson from './package.json';
import manifestGenerator from './scripts/manifestGenerator';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [manifestGenerator(), preact()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['./src/styles'],
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `${packageJson.name}.[name].js`,
      },
    },
  },
});
