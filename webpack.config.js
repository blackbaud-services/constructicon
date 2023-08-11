const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './playground/src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'playground/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({})
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    static: './playground',
    hot: true,
    port: 3001
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}