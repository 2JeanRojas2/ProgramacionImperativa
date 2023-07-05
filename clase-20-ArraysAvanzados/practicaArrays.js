let notas = [10, 4, 5, 8, 9, 2, 7];

/* ----map---- */
let notasHastaEl100 = notas.map(function (numero) {
    return numero * 10
});
// console.log(notasHastaEl100);

/* ----filter---- */
let notasAprovadas = notas.filter(function (numero) {
    return numero >= 7;
});
//console.log(notasAprovadas);

/* ----reduce---- */
let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero;
});
//console.log(sumaNotas);

/* ----forEach---- */
/* notas.forEach(function(valor, indice){
    console.log("En la posicion " + indice + " tengo el valor " + valor);
}) */

// --------MAS EJEMPLOS--------//

/* Map */ // Te gusarda en un array nuevo 
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(array){
    return array - 1;
});

/* filter */
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(array){
    return array.aprobado = true;
});

let desaprobados = estudiantes.filter(function(array){
    return array.aprobado = false;
})
// console.log(aprobados);
// console.log(desaprobados);

/* ---- Reduce ---- */
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(estado,numero){
return estado + numero
});

/* ---- ForEach ---- */
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach (function(listaDeSuperMercado ){
    console.log(listaDeSuperMercado)
});