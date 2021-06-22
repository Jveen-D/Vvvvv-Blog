const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            '/api': {
                target: 'http://124.71.57.28:8090/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve:{
        alias:{
            '@': resolve(__dirname, 'src')
            // 'vue': 'vue/dist/vue.esm-bundler.js',//配置template
        }
    }
})
