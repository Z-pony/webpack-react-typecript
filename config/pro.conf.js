const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConf = require('./base.conf.js');

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map', // 生产配置最佳实践
  output: {
    filename: 'js/[name]_[contenthash].js', // 入口和内容hash组成的文件名，也可以是hash
    chunkFilename: 'js/[name]_[contenthash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: '[name]_[contenthash:8].css',
              chunkFilename: '[name]_[contenthash:8].css',
              publicPath: '../', //* ***最后打包的时候替换引入文件路径
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader')
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [/src/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: '[name]_[contenthash:8].css',
              chunkFilename: '[name]_[contenthash:8].css',
              publicPath: '../', //* ***最后打包的时候替换引入文件路径
            },
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1
            }
          },
          {
            loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
              // importLoaders: 2, // 该方式可以让@import引入的css文件再次执行一边css打包loader
            },
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              filename: '[name]_[contenthash:8].css',
              chunkFilename: '[name]_[contenthash:8].css',
              publicPath: '../', //* ***最后打包的时候替换引入文件路径
            },
          },
          {
            loader: require.resolve('css-loader')
          },
          {
            loader: require.resolve('postcss-loader')
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              javascriptEnabled: true,
              // importLoaders: 2, // 该方式可以让@import引入的css文件再次执行一边css打包loader
            },
          }
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name]_[hash].css',
      chunkFilename: 'css/[name]_[hash].chunk.css',
    }),
    new CleanWebpackPlugin(), // 打包后先清除dist文件，先于HtmlWebpackPlugin运行
  ],
};

module.exports = merge(config, baseConf);
