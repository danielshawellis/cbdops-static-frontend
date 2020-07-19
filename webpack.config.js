const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'bundle.css'
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about-us.html',
      template: 'src/html/about-us.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'faq.html',
      template: 'src/html/faq.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'lab-results.html',
      template: 'src/html/lab-results.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pick-a-team.html',
      template: 'src/html/pick-a-team.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'shop.html',
      template: 'src/html/shop.html'
    })
  ]
};