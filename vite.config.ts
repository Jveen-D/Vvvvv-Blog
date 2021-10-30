import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
const { resolve } = require('path');
import vue from '@vitejs/plugin-vue';
import viteCompression from 'vite-plugin-compression';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ mode }: ConfigEnv): UserConfig => {
  // mode 当前开发环境

  // root项目根目录
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // 由loadEnv读取的布尔类型是一个字符串。此函数可以转换为布尔类型
  const viteEnv = wrapperEnv(env);

  /*
  * VITE_PORT         开发服务器端口
  * VITE_PUBLIC_PATH  指定输出路径
  * VITE_PROXY        代理
  * VITE_DROP_CONSOLE 打包去除console
  * */
  const { VITE_OUTPUT_DIR,VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  return{
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [vue(), viteCompression()],
    build: {
      target: 'es2015',
      outDir: VITE_OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      // 使用brotli进行压缩
      brotliSize: true,
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
