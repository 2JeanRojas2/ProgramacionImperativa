/* function sumar (numero1, numero2){
    return numero1 + numero2;
}

function restar (numero1, numero2){
    return numero1 - numero2;
}

function multiplicar (numero1, numero2){
    return numero1 * numero2;
}

function dividir (numero1, numero2){
    return numero1 / numero2;
} */

const suma = (numero1, numero2) => numero1 + numero2;

const resta = (numero1, numero2) => numero1 - numero2;

const multiplicar = (numero1, numero2) => numero1 * numero2;

const dividir = (numero1, numero2) => numero1 / numero2;

const prepararPara = (numero1, numero2) => {
    if (numero2 === 0) return;
    return dividir(numero1, numero2)
}

console.log(suma(10, 5));
console.log(resta(10, 5));
console.log(multiplicar(10, 5));
console.log(prepararPara(10, 0));

// ejemplo 1 //
function calculadora(numero1, numero2, operacion) {
    return operacion(numero1, numero2);
}
const resutaldo1 = calculadora(8, 2, dividir)
console.log(resutaldo1);

// ejemplo 2 //
const calculadora2 = (numero1, numero2, cb) => cb(numero1, numero2);
const resultado = calculadora2(10, 5, (numero1, numero2) => numero1 - numero2);
console.log(resultado);

