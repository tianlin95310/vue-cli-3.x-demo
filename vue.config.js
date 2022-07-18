const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'Vue Cli 3.x'

module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        comp: resolve('src/components')
      }
    }
  }
}
