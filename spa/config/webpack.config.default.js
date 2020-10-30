import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// const appDirectory = fs.realpathSync(process.cwd())

module.exports = {
  mode: 'development',
  entry: '../src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[id].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        // include: ''
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
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