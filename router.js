'use strict';

const { strict } = require('assert');
var fs = require('fs');
var http = require('http');

function serveFileToResponse(fileName, response) {
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
        serveFileToResponse("index.html", response);
    }

    if(request.url == "/script.js") {
        serveFileToResponse("script.js", response)
    }
}

module.exports = router;