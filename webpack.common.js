'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App', favicon: 'src/favicon.ico',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx']
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  }
};
