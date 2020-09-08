var filename = process.argv[2];

if(!filename)
    return sys.puts("Usage: node watcher.js filename");

const { spawn } = require('child_process');

var tail = spawn("tail", ["-f", filename]);
console.log("start tailing");

tail.addListener("output", function(data) {
    console.log(data);
});

var http = require("http");
var server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    tail.addListener("output", function(data) {
        res.write(data);
        res.end();
    });
});

const host = '192.168.129.131';
const port = 8080;
server.listen(port, host);