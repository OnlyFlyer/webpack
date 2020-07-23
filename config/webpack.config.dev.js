import path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '../src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: '../public/index.html' })
  ]
}