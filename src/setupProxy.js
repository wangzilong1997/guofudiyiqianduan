
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost/',
    // target:'http://82.156.183.85/',
    changeOrigin: true,
  }))
}