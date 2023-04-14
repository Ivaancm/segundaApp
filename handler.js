var querystring = require('querystring');

function home(res) {
    console.log("executing 'home' handler");
    var htmlfile = '<!DOCTYPE html>'+
    '<html lang="en">'+
    '<head>'+
        '<meta charset="UTF-8">'+
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Document</title>'+
    '</head>'+
    '<body>'+
        '<form action="/review" method="post">'+
            '<textarea name="text" cols="60" rows="20"></textarea>'+
            '<input type="submit" value="submit text">'+
        '</form>'+
    '</body>'+
    '</html>';
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(htmlfile);
    res.end();
}

function review(res, reviewData) {
    console.log("executing 'review' handler");
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.write("tu review is "+ querystring.parse(reviewData).text);
    res.end();
}

exports.home = home;
exports.review = review;