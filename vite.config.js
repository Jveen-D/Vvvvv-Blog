const { resolve } = require('path')
module.exports = {
    open: true,
    ssr: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://124.71.57.28:8090/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    alias: {
        '/@/': resolve(__dirname, 'src'),
        // 'vue': 'vue/dist/vue.esm-bundler.js',//配置template
    }
}