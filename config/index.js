'use strict'
const path = require('path')

module.exports = {
  dev: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    devtool: 'cheap-module-eval-source-map',
    host: 'localhost',
    port: '9000',
    poll: false,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    proxyTable: {
      '/api': {
        target: 'http://10.136.10.53:10010',
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/mock': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
          '^/mock': '/'
        }
      }
    }
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsPublicPath: './',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}