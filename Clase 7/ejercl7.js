/* Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura debe ser mayor a 1, 30 m. */
let edadAdmis = 10;
let altura = 1.30;
let permitir = (edadAdmis > 12 && altura > 1.30)
console.log(permitir)

/* Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos debe usar el flash. */
let hayLuz = false;
let enMovimiento = true;
let flashActivado = "hayLuzEnMovimiento";
console.log(flashActivado)

/* Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones parciales, o si obtiene un 4 en el examen final. */
let nota1 = 5;
let nota2 = 7;
let notaFinal = 7;
let pasaNivel = nota1 && nota2 && notaFinal;
console.log(pasaNivel)

/* Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus prácticas de piano y lo hizo de memoria. */
let hizoTarea = true;
let practicaPiano = false;
let pianoMemoria = true;
let miraTV = hizoTarea && practicaPiano && pianoMemoria;
console.log(miraTV)
