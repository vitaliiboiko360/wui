var fs = require('fs');
var http = require('http');


function router (request, response) {
    if(request.url == "index.html") {
        fs.readFile(__dirname + "index.html", function(err, data) {
            if (err) {
                response.writeHeader(404);
                response.end(JSON.stringify(err));
                return;
            }
            response.writeHead(200);
            response.end(data);
        })
    }
}

exports.router = router;