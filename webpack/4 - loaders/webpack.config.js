module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.txt'],
  }
};