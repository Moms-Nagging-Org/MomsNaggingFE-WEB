import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${process.cwd()}/src/`,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#f43e51',
          'heading-color': '#f43e51',
        },
        javascriptEnabled: true,
      },
    },
  },
});
