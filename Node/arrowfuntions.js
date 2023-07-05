let laMitad = numero => numero / 2;   //laMitad es el nombre de la funcion, numero es el parametro que
console.log(laMitad(8));              //espera, => seria el return de la funcion.

let dividir = (numeroA, numeroB) => numeroA / numeroB;  //se usan parentesis cuando son mas de un parametro.
console.log(dividir(20, 4));

let tengoQueEstudiar = dia => {
    if (dia == "Sabado" || dia == "Domingo") {
        return "Igual hay que estudiar";
    } else {
        return "Asistir a clases"
    }
}
console.log(tengoQueEstudiar("Lunes"));