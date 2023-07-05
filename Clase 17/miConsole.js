const miConsole = {

    imprimirNombreDni: function (objeto) {
        console.log("*Imprimir nombre y DNI*");
        console.log("Esta persona se llama " + objeto.nombre + " y su dni es " + objeto.dni);
    },

    mostrarTelefonoProfesion: function (objeto) {
        console.log("El " + objeto.Profesion + " tiene el telefono " + objeto.telefono);
    },

    mostrarNombreYDniDeTodos: function (array){
        for (let i = 0; i < array.length; i++) {
            const obj = array[i];
            this.imprimirNombreDni(obj);
        }
    },
    mostrarTelefonoYProfesionDeTodos: function (array){
        for (let i = 0; i < array.length; i++) {
            const obj = array[i];
            this.mostrarTelefonoProfesion(obj);
        }
    },
    mostrarNombreDniProfesionTelefono: function (array){
        for (let i = 0; i < array.length; i++) {
            const obj = array[i];
            this.imprimirNombreDni(obj);
            this.mostrarTelefonoProfesion(obj);
        }
    }
}
module.exports = miConsole;