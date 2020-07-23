import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  mode: 'development',
  entry: '../src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
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
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  }
}