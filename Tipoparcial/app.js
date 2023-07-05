const archivosHelper = require("./jsonHelper");

// 1. Obtener el listado de posibles participantes

const listadoAutos = archivosHelper.leerJson("autos");

// 2. Crear un objeto literal que represente la carrera


//  --------------------------------  ᓚᘏᗢ Inicio declaración objeto carrera  -------------------------------- //

const carrera = {

    // a. Agregar una propiedad llamada autos que contenga los autos obtenidos en el punto anterior

    autos: listadoAutos,

    // b. Agregar una propiedad llamada autos que contenga los autos obtenidos en el punto anterior

    autosPorTanda: 6,

    // c. Agregar un método autosHabilitados, que retorne todos los autos habilitados, es decir, aquellos que no estén sancionados.

    autosHabilitados: function () {
        return this.autos.filter((autos) => autos.sancionado === false);
    },

    // d.  Agregar un método listarAutos que reciba como parámetro un array de autos e imprima por consola la siguiente información:
    //        ○ El nombre piloto
    //        ○ La placa o patente del auto
    //        ○ El peso del auto
    //        ○ El estado del piloto
    //            i. “sancionado” → si sancionado es true
    //            ii. “habilitado” → si sancionado es false

    listarTablaAutos: function (listaAutos) {
        console.table(
            listaAutos.map((auto) => {
                return {
                    piloto: auto.piloto,
                    patente: auto.patente,
                    peso: auto.peso,
                    estadoPiloto: auto.sancionado ? "sancionado" : "habilitado",
                };
            })
        );
    },

    listarAutos: function (listaAutos) {
        listaAutos.forEach((auto) =>
            console.log(
                "Piloto: " +
                auto.piloto +
                ", patente: " +
                auto.patente +
                ", peso en kg: " +
                auto.peso +
                ", estado: " +
                (auto.sancionado ? "sancionado" : "habilitado")
            )
        );
    },

    // e. Agregar un método buscarPorPatente que permita buscar el auto en función de su patente.

    buscarPorPatente: function (strPatente) {
        return this.autos.find((auto) => auto.patente === strPatente);
    },

    // f. Agregar un método buscarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual a la cilindrada enviada como argumento.

    buscarPorCilindrada: function (numCilindradaMax) {
        return this.autosHabilitados().filter(
            (auto) => auto.cilindrada <= numCilindradaMax
        );
    },

    // g.Agregar un método ordenarPorVelocidad que ordene los autos de menor a mayor según su velocidad.

    ordenarPorVelocidad: function () {
        return this.autos.sort(
            (auto1, auto2) => auto1.velocidad - auto2.velocidad
        )
    },

    // h. Agregar un método generarTanda que permita retorne un array de autos, que cumplan con las siguientes condiciones:

    generarTanda: function (numCilindradaMax, numPesoMax) {
        const autosFiltradosCilindrada = this.buscarPorCilindrada(numCilindradaMax);
        const autosFiltradosPeso = autosFiltradosCilindrada.filter(
            (auto) => auto.peso <= numPesoMax
        );
        return autosFiltradosPeso.slice(
            0, this.autosPorTanda
        )
    },

    // i. Agregar un método listarPodio, que calcule el podio en función del puntaje de los pilotos y muestre el resultado por consola

    listarPodio: function (listaAutosTanda) {
        const autosPuntajesDesc = listaAutosTanda.sort(
            (auto1, auto2) => auto2.puntaje - auto1.puntaje
        )
        const autosPodio = autosPuntajesDesc.slice(
            0, 3
        )
        console.log("El ganador es: " + autosPodio[0].piloto + ", con un puntaje de " + autosPodio[0].puntaje);
        console.log("El segundo puesto es para  " + autosPodio[1].piloto + ", con un puntaje de " + autosPodio[1].puntaje);
        console.log("El tercer puesto es para " + autosPodio[2].piloto + ", con un puntaje de " + autosPodio[2].puntaje);
    }
};
//  --------------------------------   final declaración objeto carrera ᓚᘏᗢ -------------------------------- //


console.log(
    "// =================================== verificación punto 1 listado autos ᓚᘏᗢ =================================== // "
);
console.table(listadoAutos);

console.log(
    "// =================================== verificación punto 2 Objeto carrera ᓚᘏᗢ =================================== // "
);
console.log(carrera);

console.log(
    "// =================================== verificación punto 2.a propiedad Lista Autos ᓚᘏᗢ =================================== // "
);
console.table(carrera.autos);

console.log(
    "// =================================== verificación punto 2.c Lista Autos Habilitados ᓚᘏᗢ =================================== // "
);
const listaAutosHabilitados = carrera.autosHabilitados();
console.table(listaAutosHabilitados);

console.log(
    "// =================================== verificación punto 2.d Lista Propiedades Autos ᓚᘏᗢ =================================== // "
);
carrera.listarTablaAutos(carrera.autos);
carrera.listarAutos(carrera.autos);

console.log(
    "// =================================== verificación punto 2.e Buscar por patente ᓚᘏᗢ =================================== // "
);
console.table(carrera.buscarPorPatente("ABC123"));
console.table(carrera.buscarPorPatente("AcC123"));

console.log(
    "// =================================== verificación punto 2.f Buscar por cilindrada ᓚᘏᗢ =================================== // "
);
console.table(carrera.buscarPorCilindrada(1500, carrera.autos));
console.table(carrera.buscarPorCilindrada(50, carrera.autos));
console.table(carrera.buscarPorCilindrada(3000, carrera.autos));

console.log(
    "// =================================== verificación punto 2.g Ordenar lista autos por velocidad ᓚᘏᗢ =================================== // "
);

console.table(carrera.ordenarPorVelocidad());

console.log(
    "// =================================== verificación punto 2.h  ᓚᘏᗢ =================================== // "
);

console.table(carrera.generarTanda(200000, 170000, carrera.autos));
console.table(carrera.generarTanda(2000, 1700, carrera.autos));

console.log(
    "// =================================== verificación punto 2.i  ᓚᘏᗢ =================================== // "
);

const listaAutosTanda = carrera.generarTanda(2000, 1700, carrera.autos);
carrera.listarPodio(listaAutosTanda);