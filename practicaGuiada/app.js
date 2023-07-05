const jsonHelper = require("./jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
//console.log(jsonHelper.leerJson("departamentos"));

// Escribí tu codigo a partir de acá.
const arrayDptos = jsonHelper.leerJson("departamentos")
//console.log(arrayDptos);
const unDpto = arrayDptos[0];
const dptoid = arrayDptos[0].id;
//console.log(dptoid);

const inmobiliaria = {
    departamentos: arrayDptos,
    listarDepartamentos : function(arrayDeDepartamentos){
    for (let i = 0; i < arrayDeDepartamentos.length; i++) {
        console.log("id: " + arrayDeDepartamentos[i].id 
        + ", precio $ " + arrayDeDepartamentos[i].precioAlquiler 
        + ", Esta " + (arrayDeDepartamentos[i].disponible ? "Disponible" : "Ocupado"));
    }    
    }
}
inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);

















/*
    departamentosDisponibles: function(disponibilidad){
        let depDisponible = []
        for (let i = 0; i < disponibilidad.length; i++) {
            if(disponibilidad[i].disponible)
            depDisponible.push(disponibilidad[i])
            }
        }
        return  depDisponible;
    }

inmobiliaria.listarDptos(inmobiliaria.departamentos);
console.log(inmobiliaria.departamentosDisponibles(inmobiliaria.departamentos)); */