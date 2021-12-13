
const { createProxyMiddleware } = require('http-proxy-middleware')

let url = 'http://82.156.183.85/'
// let url = 'http://localhost/'

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    // target: 'http://localhost/',
    target: url,
    changeOrigin: true,
  }))
  app.use('/users', createProxyMiddleware({
    // target: 'http://localhost/',
    target: url,
    changeOrigin: true,
  }))
  app.use('/penta', createProxyMiddleware({
    // target: 'http://localhost/',
    target: url,
    changeOrigin: true,
  }))
}