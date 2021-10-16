import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';
import { OUTPUT_DIR } from './build/constant';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // 由loadEnv读取的布尔类型是一个字符串。此函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  return{
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [vue(), viteCompression()],
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 去除console
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
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
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },
  }
}
