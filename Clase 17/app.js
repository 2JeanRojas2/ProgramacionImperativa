const informacionDeObjetos = require("./Datos");
const miConsole = require("./miConsole");



console.log(informacionDeObjetos);
miConsole.imprimirNombreDni(informacionDeObjetos[0]);
miConsole.mostrarTelefonoProfesion(informacionDeObjetos[0]);
miConsole.mostrarNombreYDniDeTodos(informacionDeObjetos);
miConsole.mostrarTelefonoYProfesionDeTodos(informacionDeObjetos);
miConsole.mostrarNombreDniProfesionTelefono(informacionDeObjetos);