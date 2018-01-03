const path = require('path')

module.exports = {
  entry: path.resolve('./src/App.jsx'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      views: path.resolve(__dirname, './src/views')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map'
}
