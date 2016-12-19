var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
