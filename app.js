const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('hola que tal');
});

const puerto = 4000;

servidor.listen(puerto, () => {
    console.log('el servidor esta escuchando por el puerto ' + puerto);
});