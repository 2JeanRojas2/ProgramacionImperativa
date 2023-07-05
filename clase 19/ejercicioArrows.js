// 1.
const convertEnPulgadas = (Pulgadas) => Pulgadas * 2.54;
let pulgadas = 20;
console.log(pulgadas + " Pulgadas equivalen a " +  convertEnPulgadas(20) + " cm");

// 2.
const convertirEnUrl = (nombre) => "hhtp://www." + nombre + ".com";
console.log(convertirEnUrl("Jean"));

// 3.
const ponerAdmiracion = (texto) => "¡¡" + texto + "!!";
console.log(ponerAdmiracion("como estas"));

// 4.
const convertirAñosPerro = (años) => años + " años de una persona son " + años * 7 + " años perro";
console.log(convertirAñosPerro(5));

// 5.
const calcularValorHora = (sueldo) => "Mi hora de trabajo vale " + sueldo / 40 + "$ Pesos";
console.log(calcularValorHora(1000000));  

// 6.
const calculadorImc = (altura, peso) => "Mi indice de masa corporal es de " + peso / (altura * altura);
console.log(calculadorImc(180, 70));

// 7.
const convertirMayusculas = (string) => string.toUpperCase();
console.log(convertirMayusculas("jean aprende cosas nuevas"));

// 8.
const tipoParametro = (dato) => "Tipo de dato " + typeof(dato);
console.log(tipoParametro(23));
console.log(tipoParametro("Se me olvido como funciona typeOf"));
console.log(tipoParametro(true));

// 9.
const circunferencia = (radio) => "El radio de mi circulo es " + radio * 2 * Math.PI;
console.log(circunferencia(40));

