const path = require('path')
const webpack = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'Vue Cli 3.x'

module.exports = {
  publicPath: '/app3/',
  productionSourceMap: false,
  configureWebpack: {
    name: name,
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
  }
}
