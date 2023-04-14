const { info } = require("console")

let infoCursos = {
    'programacion': [
        {
            id: 1,
            titulo: 'Aprende Python',
            lenguaje: 'Python',
            visitas: 15000,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'Aprende Node.JS',
            lenguaje: 'JavaScript',
            visitas: 20000,
            nivel: 'medio'
        },
        {
            id: 3,
            titulo: 'python avanzado',
            lenguaje: 'Python',
            visitas: 21212,
            nivel: 'Avanzaado'
        }
    ],
    'matematicas': [
        {
            id: 1,
            titulo: 'Aprende Calculo',
            tema: 'calculo',
            visitas: 32322,
            nivel: 'basico'
        },
        {
            id: 2,
            titulo: 'aprende algebra',
            tema: 'algebra',
            visitas: 65578,
            nivel: 'basico'
        }

    ]
}

module.exports.infoCursos = infoCursos;