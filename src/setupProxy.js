
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    // target: 'http://localhost:80/',
    target:'http://82.156.183.85/',
    changeOrigin: true,
  }))
}