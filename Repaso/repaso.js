let arrayCorreosPendientes = [
    'iroman@digitalhouse.com','loki%digitalhouse.com','loki@digitalhouse.com',
    'thanosdigitalhouse.com','thanos@digitalhouse.com'];
    /* array de correos admitidos */
    let arrayCorreosAdmitidos = [
    'thor@digitalhouse.com',
    'tucuMan@digitalhouse.com',
    'wanda@digitalhouse.com'
];
let arrayCorreosDescartados = [];


function verificarCorreo(arrayCorreosPendientes){
    for (let i = 0; i < arrayCorreosPendientes.length; i++) {
        if (arrayCorreosPendientes[i] == "@"){
        arrayCorreosAdmitidos.push[i];
    }else{ 
        arrayCorreosAdmitidos.push[i];
    }

}
console.log(verificarCorreo(arrayCorreosPendientes));


/* console.log("--- Array de correos admitidos: " + "longitud de array" + "
---");
console.log(arrayCorreosAdmitidos);
console.log();
console.log("---Array de correos Descartados:"+ "longitud de array" + "
---");
console.log(arrayCorreosDescartados);    */ 