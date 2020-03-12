const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

const template = path.resolve(__dirname, '../public/index.html');
const env = process.env.NODE_ENV;
const DIST_PATH = path.resolve(__dirname, '../build');


module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: DIST_PATH,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
    alias: {
      src: path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory(
                  [{
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  }],
                )],
              }),
              compilerOptions: {
                module: 'es2015',
              },
            },
          },
        ],
      },
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/, // ?表示x有0个或一个
      //   exclude: /(node_modules|bower_components)/,
      //   include: path.resolve(__dirname, '../src'), // 只在include包含的目录下进行loader编译
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //     },
      //      {
      //       loader: 'source-map-loader',
      //     },
      //   ],
      // },
      // 加载解析文件资源
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader', // 和file-loader功能相同，但更智能
          options: {
            esModule: false, // 这里设置为false, 默认是true，打包出来的图片src=[object Module]
            // 配置打包后的文件名,具体可看webpack的file-loader文档
            name: '[name].[ext]?[hash]',
            outputPath: 'images/',
            limit: 4096, // 当图片大小大于4k时将以文件形式输出，否则以base64输出
          },
        },
      },
      // 引入字体，svg等文件
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // 向dist文件中自动添加模版html
      template,
      filename: 'index.html',
    }),
  ],
  optimization: {
    namedChunks: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
    },
    usedExports: true,
  },
};
