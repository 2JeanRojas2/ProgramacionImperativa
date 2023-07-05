/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */
function convertInInchs(inchs) {
    return inchs * 2.54
}

console.log(20 + " pulgadas equivalen a " + convertInInchs(20) + " cm");

/* Crear una función que recibe un string y lo convierte en una URL.
    ej: “pepito” es devuelto como “http://www.pepito.com” */
function convertInUrl(nombre) {
    return "http://www." + nombre + ".com"
}
let url = "pepito"
console.log(convertInUrl(url));

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */
function admiracion(x) {
    return x + "!!"
}
console.log(admiracion("como estas"));

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.*/
function convertInYears(years) {
    return years * 7
}
console.log(convertInYears(5))



/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
    PD: considera que tu mes de trabajo tiene 40 horas. */
function calcularValorHora(sueldo) {
    return sueldo / 40
}
console.log(calcularValorHora(100000));

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.
Luego, ejecutar la función probando diferentes valores. */
function calculadorIMC(altura, peso) {
    return peso / (altura * altura)
}
console.log(calculadorIMC(1.80, 60));

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
Investiga que hace el método de strings.toUpperCase() */
function convertirEnMayuscula(texto) {
    return texto.toUpperCase()
}
console.log(convertirEnMayuscula("hola mundo"));

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
    pista: te servirá revisar que hace la palabra reservada typeof. */
function conocerParametro(parametro) {
    return typeof (parametro)
}
console.log(conocerParametro("hola"));
console.log(conocerParametro(3));
console.log(conocerParametro(true));




/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
    Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */
function radioToCircunference(r) {

    let c = r * 2 * Math.PI;
    return c;

}
console.log(radioToCircunference(20));