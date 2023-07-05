/* let peliculas=["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let peliculas2=["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];


let peliMayus=convertirMayusculas(peliculas)
let peliMayus2=convertirMayusculas(peliculas2)

console.log(union(peliMayus,peliMayus2));

function convertirMayusculas(array) {
    let listaNueva=[]
    for (let i = 0; i < array.length; i++) {       
        listaNueva.push(array[i].toUpperCase());
    }
    return listaNueva
}

function union(peliculas,peliculas2){
    let quitarJuego = peliculas2.pop();
    for (let i = 0; i < peliculas2.length; i++) {
            peliculas.push(peliculas2[i]);        
    }   
    return peliculas;
}
 */
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (){
        return this.energia = (energia - 5) + this.experiencia ( experiencia + 2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia );
console.log("Deportista experiencia: "+deportista.experiencia);





