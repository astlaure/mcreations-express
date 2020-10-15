const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: [
    './resources/scripts/main.ts',
    './resources/sass/style.scss',
  ],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: { loader: 'file-loader', options: { outputName: 'images/[name].[ext]' } },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '**', to: 'images', context: './resources/images' },
        { from: 'favicon.png', to: '.', context: './resources' },
      ],
    }),
  ],
};
