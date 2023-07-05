//Nuestra tarea es crear una función que se va a llamar ejemplo 
//y tiene que devolver un String diciendo "hola, soy una función".

function ejemplo1() {
    return "Hola, Soy una funcion";
}
console.log("------Primera Funcion------");
console.log(ejemplo1());

/* Primero creamos una variable con el nombre  ejemplo 
y le asignamos como valor una función.
La misma debe retornar un String que diga: "hola, soy una función expresada". */

const ejemplo = function () {
    return "Hola, soy una función expresada";
}
console.log("--------Segunda Funcion--------");
console.log(ejemplo());


function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
console.log("------Tercera Funcion--------");
console.log(saludar("Ana", "Aguilera"))

/* anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores,
tendrá que devolver el número recibido multiplicado por 3(tres) y al resultado restarle 1(uno). */

function anterior(numero) {
    return --numero ;
}
console.log("------ Funcion menos 1 --------");
console.log(anterior(5));

function triple(numero) {
    return numero * 3;
}
console.log("---------Funcion numero por 3----------");
console.log(triple(3));

function anteriorDelTriple(numero) {
    return anterior(triple(numero))
}
console.log("----------Funcion multiplicar y restar-----------");
console.log(anteriorDelTriple(3));
