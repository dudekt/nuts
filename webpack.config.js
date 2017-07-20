const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  entry: path.join(__dirname, '/app/index'),
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'assets/js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=1000000'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'sass-loader']
      })
    },
    {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.css'),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 9000,
        proxy: 'http://localhost:9100/'
      },
      {
        reload: false
      }
    )
  ],
  watch: false
};

module.exports = config;
