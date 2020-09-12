var fs = require('fs');
var http = require('http');

function fsReadFile(fileName, response) {
    fs.readFile(__dirname + "/" + fileName, function(err, data) {
        if (err) {
            response.writeHeader(404);
            response.end(JSON.stringify(err));
            return;
        }
        response.writeHead(200);
        response.end(data);
    })
}

function router (request, response) {
    if(request.url == "/index.html" || request.url == "/") {
        fsReadFile("index.html", response);
    }

    if(request.url == "/script.js") {
        fsReadFile("script.js", response)
    }
}

module.exports = router;