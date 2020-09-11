const http = require('http');
const fs = require('fs');

const hostname = '192.168.129.131';
const port = 8080;

const server = http.createServer((req, res) => {
    onRequest(req, res);    
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
});