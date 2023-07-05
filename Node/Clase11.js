//---Ciclos For loop---//
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasAnimadas = ["Soul" , "Unidos" , "Up" , "shrek", "coco" , "Fornite"]

function convertirArrayMayusculas(array) {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
}
function pasajeDeElementos(array1, array2) {
    let nuevoArray = array1;
    for (let i = 0; i < array2.length; i++) {
        nuevoArray.push(array2[i]);
    }return nuevoArray
}

console.log(convertirArrayMayusculas(peliculas));
console.log(pasajeDeElementos(peliculas, peliculasAnimadas));