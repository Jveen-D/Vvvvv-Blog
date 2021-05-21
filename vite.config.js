const {resolve} = require('path')
module.exports = {
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
        '/@/': resolve(__dirname, 'src')
    }
}