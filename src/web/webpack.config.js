const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jquery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: require.resolve("jquery.fancytree/dist/jquery.fancytree.min.js"),
        use: "imports-loader?$=jquery"
      },
      {
        test: require.resolve("jquery.fancytree/dist/modules/jquery.fancytree.edit.js"),
        use: "imports-loader?$=jquery"
      },
      {
        test: require.resolve("jquery.fancytree/dist/modules/jquery.fancytree.edit.js"),
        use: "imports-loader?$=jquery"
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/assets/',
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true,
    compress: true,
    port: 3000
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      fancytree: 'jquery.fancytree',
      _: 'lodash'
    }),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      title: "Enequi Diagnostics",
      filename: path.resolve(__dirname, 'dist', "index.html"),
      template: 'src/index.hbs'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};