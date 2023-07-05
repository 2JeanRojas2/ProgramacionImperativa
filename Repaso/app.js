const archivos = require(__dirname + "/lecturaEscritura");
let JsonProfesionales = archivos.leerJson("profesionales");

//objeto literal con props y métodos
const cartillaProfs = {
  profesionales: JsonProfesionales,
  //NO modificar esto
  mostrarUnProfesional: function (profesional) {
    console.table({
      [profesional.identificador]: {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        honorarios: profesional.honorarioConsulta,
        consultas: profesional.cantidadConsultas,
        habilitado: profesional.estaHabilitado,
      },
    });
  },
  listarTodos: function (profesionalesAMostrar) {
    let vista = [];
    for (let i = 0; i < profesionalesAMostrar.length; i++) {
      vista.push(this.traerUnProfesional(profesionalesAMostrar[i]));
    }
    console.table(vista);
  },
  traerUnProfesional: function (profesional) {
    return {
      nombre: profesional.nombre,
      honorarios: "$" + profesional.honorarioConsulta,
      especialidad: profesional.especialidad,
      habilitado: profesional.estaHabilitado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
};

console.log("\n****** mostrar todos los profesionales *****");
cartillaProfs.listarTodos(JsonProfesionales);

console.log("\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****");
// responda aquí: 

console.log("\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****");
// responda aquí: 

console.log("\n****** punto 3 mostrar un profesional *****");
const profesional = // un profesional del array a partir de un índice cualquiera
cartillaProfs.mostrarUnProfesional(profesional);

console.log("\n****** punto 4 Listar habilitados ******");
/* const habilitados = cartillaProfs.filtrarHabilitados(true);
cartillaProfs.listarTodos(habilitados);
*/


