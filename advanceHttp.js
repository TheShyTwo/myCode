const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            res.end(content, 'utf-8')
        } else {
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf-8')
        }
    })
}

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true)
    const pathname = parseUrl.pathname

    if (pathname === '/') {
        serveFile('./index.html', 'text/html', res)
    } else if (pathname === '/about') {
        serveFile('./about.html', 'text/html', res)
    } else if (pathname === '/api/data') {
        const data = {
            message: 'hello, this is your data!',
            timestamp: new Date()
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end('404 Not Found !')
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running at http://127.0.0.1:3000/')
})