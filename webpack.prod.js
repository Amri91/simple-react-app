'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new ClosureCompilerPlugin({
    //   compiler: {
    //     // jar: 'path/to/your/custom/compiler.jar', //optional
    //     language_in: 'ECMASCRIPT_2017',
    //     language_out: 'ECMASCRIPT5',
    //     compilation_level: 'ADVANCED'
    //   },
    //   concurrency: 3,
    // })
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 1024 * 10,
      minRatio: 0.8
    })
  ]
});
