
// const http = require('http');
const colors = require('colors');
/*
const handleServer = function (req, res) {
    res.wirteHead(200, { 'Content-type' : 'text/html' });
    res.write('<h3>Hola Mundo</h3>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log('servidor escuchando por el puerto 3000'.yellow);
});
*/

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('<h3>Hola mundo con express y nodejs</h3>');
    res.end();
});


server.listen(3000, () => {
    console.log("escucando por el puerto 3000".red);
});