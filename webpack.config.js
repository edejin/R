/**
 * Created by fima on 01/06/17.
 */
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let HTMLWebpackPluginConfigBack = new HTMLWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});
let HTMLWebpackPluginConfigFront = new HTMLWebpackPlugin({
  template: __dirname + '/public/front.html',
  filename: 'front.html',
  inject: 'body'
});

module.exports = [
  {
    entry: [
      'babel-polyfill',
      './src/back/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      filename: 'back.js'
    },
    module: {
      loaders: [
        // js babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // custom less
        {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader?config=lessLoaderCustom"
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=100000"
        },
        {
          test: /\.jpg$/,
          loader: "file-loader"
        },
        {
          test: /\.gif$/,
          loader: "file-loader"
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    plugins: [
      HTMLWebpackPluginConfigBack,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': process.argv.indexOf('-p') !== -1 ? `"production"` : `""`
        }
      })
    ]
  }, {
    entry: [
      'babel-polyfill',
      './src/front/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      filename: 'front.js'
    },
    module: {
      loaders: [
        // js babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // custom less
        {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader?config=lessLoaderCustom"
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=100000"
        },
        {
          test: /\.jpg$/,
          loader: "file-loader"
        },
        {
          test: /\.gif$/,
          loader: "file-loader"
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },
    plugins: [
      HTMLWebpackPluginConfigFront,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': process.argv.indexOf('-p') !== -1 ? `"production"` : `""`
        }
      })
    ]
  }
];