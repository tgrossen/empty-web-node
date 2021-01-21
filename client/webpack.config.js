const path = require('path')

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
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
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
}

module.exports = config
