module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.hminxin.cn:8000/computer',
        changeOrigin: true
      }
    }
  }
}