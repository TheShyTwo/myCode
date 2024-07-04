const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Home Page')
})

server.listen(port, '127.0.0.1', () => {
    console.log('Server is running at http://127.0.0.1:3000')
})