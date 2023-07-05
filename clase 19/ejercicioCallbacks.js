const nombres = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam'];

/*function buscarNombre(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        const e = nombres[i];
        if (e === nombre) {
            return "El nombre Martin fue encontrado"
        }
    }
};
console.log (buscarNombre('Martin'));*/


const buscarNombre = (nombre, callback) => callback(nombre);

function mostrarResultado(nombre) {
    return (nombre === " ") ? "El nombre: " + " fue encontrado" : "El nombre no fue encontrado";
}

console.log(buscarNombre('Juan', mostrarResultado));