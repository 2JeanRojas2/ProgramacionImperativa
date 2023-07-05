const archivosHelper = require("./jsonHelper");

const ciclistas = archivosHelper.leerJson("bicicletas")

const carrera = {
    ciclistas: ciclistas,
    ciclistasPorTanda: 4,
    ciclistasHabilitados: function () {
        return this.ciclistas.filter(ciclista => !ciclista.dopaje);
    },
    listarCiclistas: function (ciclistas) {
        ciclistas.forEach(ciclista => {
            let estado = ciclista.dopaje ? "Inhabilitado" : "Habilitado";
            console.log(
                "Ciclista: " + ciclista.ciclista
                + ", Peso en kg: " + ciclista.peso
                + ", Rodado: " + ciclista.rodado
                + ", Largo Bici: " + ciclista.largo + "Cm"
                + ", Estado: " + estado + "."
            );
        })
    },
    buscarPorId: function (id) {
        return this.ciclistas.find(ciclista => ciclista.id === id);
    },
    buscarPorRodado: function (rodado) {
        let ciclistasHabilitados = this.ciclistasHabilitados();
        return ciclistasHabilitados.filter(ciclista => ciclista.rodado <= rodado);
    },
    ordenarPorRodado: function () {
        return ciclistas.sort((a, b) => a.rodado - b.rodado);
    },
    generarTanda: function (rodado, peso) {
        let ciclistasHabilitados = this.ciclistasHabilitados();
        let ciclistasPorTanda = [];
        ciclistasHabilitados.forEach(function (ciclista) {
            if (ciclista.rodado <= rodado && ciclista.peso <= peso) {
                ciclistasPorTanda.push(ciclista)
                if (ciclistasPorTanda.length >= this.ciclistasPorTanda) return
            }
        })
        return ciclistasPorTanda
    },
    listarPodio: function (tanda) {
        let tandaDeMayorAMenor = tanda.sort((a, b) => b.puntaje - a.puntaje);
        let primero = tandaDeMayorAMenor[0];
        let segundo = tandaDeMayorAMenor[1];
        let tercero = tandaDeMayorAMenor[2];

        console.log("El primero es para " + primero.ciclista + "con un puntaje de " + primero.puntaje);
        console.log("El segundo puesto es para " + segundo.ciclista + " con un puntaje de " + segundo.puntaje);
        console.log("El tercer puesto es para " + tercero.ciclista + " con un puntaje de " + tercero.puntaje);
    },

    calcularPodio: function (tanda = [], puestos) {
        let arrayPodio = [];
        for (let i = 0; i < puestos; i++) {
            const element = tanda[i];
            let indexPodio = Math.floor(Math.random() * (tanda.length));
            arrayPodio.push(tanda[indexPodio]);
        }
        return arrayPodio;
    },
    eliminarPorId: function (id) {
        this.ciclistas.splice(pelicula.id));
    }


}

console.log("********Ciclistas Habilitados *********");
const listarCiclistasHabilitados = carrera.ciclistasHabilitados();
console.log(listarCiclistasHabilitados);

console.log("\n\t\t********ListarCiclistas *********");
carrera.listarCiclistas(carrera.ciclistas);

console.log("\n\t\t********Buscar Por Id*********");
console.log(carrera.buscarPorId(4));

console.log("\n\t\t ******** Punto 4 *********");
carrera.listarCiclistas(carrera.buscarPorRodado(25));

console.log("\n\t\t ******** Punto 5 *********");
carrera.listarCiclistas(carrera.ordenarPorRodado());

console.log("\n\t\t ******** Punto 6 *********");
carrera.listarCiclistas(carrera.generarTanda(24, 99.36))
console.log();

console.log("****** listarPodio ******");
carrera.listarPodio(carrera.generarTanda(1500, 2000));
console.log();

