const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res) => {
    const{method} = req;

    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        case 'PUT':
            return manejarSolicitudPUT(req, res);
        case 'DELETE':
            return manejarSolicitudDELETE(req, res);
        default:
            console.log('el mentodo usado no puede ser manejado por el servidor');
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;
    if(path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor API con Node.Js');
    } else if(path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if(path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }

    res.statusCode = 404;
    res.end('el recurso solicitado no existe');
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;
    if(path === '/cursos/programacion') {
        let cuerpo = "";

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            // convertir a un objeto de JavaScript
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('el servidor recibio una solicitud POST para /cursos/programacion');
        });
    }
}

function manejarSolicitudPUT(req, res) {
    const path = req.url;
    if(path === '/cursos/matematicas') {
        res.statusCode = 200;
        return res.end('el servidor recibio una solicitud PUT para /cursos/matematicas');
    }
}

function manejarSolicitudDELETE(req, res) {
    const path = req.url;
    if(path === '/cursos') {
        res.statusCode = 200;
        return res.end('el servidor recibio una solicitud DELETE para /cursos');
    } else {
        res.statusCode = 404;
        return res.end('no se pueden hacer solicitudes DELETE fuera de /cursos');
    }
}

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`servidor escuchando por ${puerto}`);
});