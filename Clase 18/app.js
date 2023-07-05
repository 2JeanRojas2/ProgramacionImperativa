const archivosHelper = require('./jsonHelper');
const arrayDeAutos = archivosHelper.leer('./AUTOS.json');
/* const saludo = "Hola, como estas?"

archivosHelper.escribir('./archivos.txt', saludo) */

const concecionario = {
    autos: arrayDeAutos,
    agregarAuto: function(marca, modelo, anioVehiculo, precio, patente){
        this.autos.push({
            marca:marca,
            modelo:modelo,
            anio:anioVehiculo,
            precio:precio,
            patente:patente,
            vendido:false,
        })
        
        archivosHelper.escribir('./AUTOS.json',this.autos)
    }
}
concecionario.agregarAuto("Ford", "autis", 2019, 200, "JSHDIA")