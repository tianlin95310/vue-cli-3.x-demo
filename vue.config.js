const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: '/app3/',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        comp: resolve('src/components')
      }
    }
  },
  devServer: {
    port: 9527,
    proxy: {
      '/bpi': {
        target: 'https://aip.baidubce.com',
        changeOrigin: true,
        pathRewrite: {
          '^/bpi': ''
        }
      }
    }
  },
  transpileDependencies: true
})
