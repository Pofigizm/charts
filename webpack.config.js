/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const env = {
  prod: process.env.NODE_ENV === 'production',
  dev: process.env.NODE_ENV !== 'production',
};

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ].concat(!env.prod ? [
    new webpack.NoErrorsPlugin(),
  ] : [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ]),
}

