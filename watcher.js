var sys = require('sys');
var filename = process.argv[2];

if(!filename)
    return sys.puts("Usage: node watcher.js filename");

const { spawn } = require('child_process');

var tail = process.createChildProcess("tail", ["-f", filename]);
sys.puts("start tailing");

tail.addListener("output", function(data) {
    sys.puts(data);
});

var http = require("http");
http.createServer(function(req, res) {
    res.sendHeader(200, {"Content-Type": "text/plain"});
    tail.addListener("output", function(data) {
        res.sendBody(data);
    });
}).listen(8000);