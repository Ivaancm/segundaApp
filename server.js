var http = require('http');
var url = require('url');

function startServer(route, handle) {
    // Creamos el servidor
    function onRequest(req, res) {
        var reviewData = "";
        var pathname = url.parse(req.url).pathname;
        console.log('request recived for ', pathname);
        req.setEncoding("utf8");

        req.addListener("data", function(chunk) {
            reviewData += chunk;
        });
        req.addListener("end", function() {
            route(handle, pathname, res, reviewData);
        });

    }
    http.createServer(onRequest).listen(8888);        // indicamos que va a escuchar por el puerto 8888.

    console.log("servidor escuchando por el puerto 8888");
}

exports.startServer = startServer;


