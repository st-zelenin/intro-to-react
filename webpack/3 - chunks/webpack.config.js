module.exports = {
  devtool: false,
  entry: {
    app: './app.js',
    admin: './admin.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2, // minimum number of chunks that must share a module before splitting
          minSize: 0,   // default 30000
        },
      },
    },
  },
};
