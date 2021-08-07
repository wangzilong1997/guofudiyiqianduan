
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/huyapenta', createProxyMiddleware({
    target: 'http://82.156.183.85:80/',
    changeOrigin: true,
  }))
  app.use('/api', createProxyMiddleware({
    target: 'http://82.156.183.85:80/',
    changeOrigin: true,
  }))
}