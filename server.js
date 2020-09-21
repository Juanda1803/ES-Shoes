const http = require('http')
const app = require('./src/index')

const server = http.createServer()

server.on('request', (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end()
})

server.listen(8000)
console.log('Server in the url http://localhost:8000')
