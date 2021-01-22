const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const src = path.resolve('src')

const config = {
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
  plugins: [new MiniCssExtractPlugin()],
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
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        include: src,
      },
    ],
  },
  stats: {
    assets: true,
    warnings: false,
    children: false,
    chunks: false,
  },
}

module.exports = config
