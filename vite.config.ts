const { resolve } = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
export default defineConfig({
  plugins: [vue(), viteCompression()],
  build: {
    brotliSize: false,
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://124.71.57.28:8090/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
