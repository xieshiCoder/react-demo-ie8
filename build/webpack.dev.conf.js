const path = require('path');
const webpack = require('webpack');
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // context: path.resolve(__dirname, "../src"),
  entry:{
    app: path.resolve(__dirname, "../src/main.js"),
  },
  output:{
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: '#cheap-module-eval-source-map',
  mode: 'development',
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        include: [resolve('src'), resolve('test')],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist
    port: 9000, //端口改为9000
    host: '127.0.0.1', //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取 
    open:true, // 自动打开浏览器
    index:'index.html', // 与HtmlWebpackPlugin中配置filename一样
    inline:true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
    hot:false,
    compress:true //压缩
  }
}