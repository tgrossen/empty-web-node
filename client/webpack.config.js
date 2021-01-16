const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new ExtractTextPlugin('[name].css'),
]

const config = {
  devtool: 'eval',
  entry: {
    main: ['./src/index.tsx'],
  },
  output: {
    path: path.join(__dirname, '..', 'server', 'build', 'assets'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, '..', 'common'),
      client: path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.tsx', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { useCache: true, useTranspileModule: true },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname)],
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]---[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (_) => [
                  require('postcss-import')(),
                  require('postcss-cssnext')(),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]---[hash:base64:5]',
              },
            },
            { loader: 'sass-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (_) => [
                  require('postcss-import')(),
                  require('postcss-cssnext')(),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          { loader: 'url-loader' },
          {
            loader: 'image-webpack-loader',
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: { quality: '65-90', speed: 4 },
            },
          },
        ],
      },
    ],
  },
  stats: {
    assets: true,
    warnings: false,
    children: false,
    chunks: false,
  },
  plugins,
}

module.exports = config
