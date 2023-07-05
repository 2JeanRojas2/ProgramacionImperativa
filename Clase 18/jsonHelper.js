const fs = require('fs');

const archivosHelper = {
    leer: function (nombreArchivo) {
        const stringAutos = fs.readFileSync(nombreArchivo, 'utf8');
        return JSON.parse(stringAutos);
    },
    escribir: function (nombreArchivo, datos) {
        fs.writeFileSync(nombreArchivo,datos)
    }
};

module.exports = archivosHelper