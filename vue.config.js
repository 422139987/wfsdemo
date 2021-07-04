module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  outputDir: 'dist',
  devServer: {
    port: 5050,
    host: 'localhost',
    https: false,
    open: false,
  }
}