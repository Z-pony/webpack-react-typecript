const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const DIST_PATH = path.resolve(__dirname, '../build');
const baseConf = require('./base.conf.js');

const config = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 开发环境配置最佳实践
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  // 开发服务器
  devServer: {
    port: '8081',
    hot: true, // 热更新
    open: true, // 自动打开浏览器
    contentBase: DIST_PATH, // 告诉服务器从哪个目录中提供内容，只有在你需要提供静态文件时才需要
    historyApiFallback: true, // 所有404都连接到index.html
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: [ // loader解析的顺序是从下到上，从右到左的顺序
        'style-loader', // 使用MiniCssExtractPlugin时就不能使用style-loader了
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 该方式可以让@import引入的css文件再次执行一边css打包loader
          },
        },
        'postcss-loader',
        'less-loader',
      ],
    }, // 加载解析文件资源
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(config, baseConf);
