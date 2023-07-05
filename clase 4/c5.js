


function radioToCircunference (r){

let c  = r * 2 * Math.PI;
return c;

}
console.log(radioToCircunference(20));

function mi_funcion( param1, param2) {
    contador = 0;
    resultado = 1;
    while (contador < param2) {
        resultado = resultado * param1;
        contador = contador + 1;
    }
    return resultado;
}
console.log(mi_funcion(3, 0));

function funcion(numero) {
    if (numero == 0) {
        return 1;
    }else{
        return numero * funcion(numero -1);
    }
}

console.log(funcion(2));
