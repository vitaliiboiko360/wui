const http = require('http');
const fs = require('fs');

const hostname = '192.168.129.131';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    fs.readFile('./svg/circle.html', (err, data) => {
        if (err) throw err;
        res.end(data);
      });

    
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
});