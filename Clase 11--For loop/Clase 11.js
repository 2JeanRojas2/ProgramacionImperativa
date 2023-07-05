//---Ciclos For loop---//
var remainingSlices = 5;

while (remainingSlices) {
    console.log('This slice is for you!');
    remainingSlices--;
}

console.log('Coming back to the kitchen');


console.log("---------For Vacaciones---------")
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
}

console.log("----------Ejemplo de un forbucle anidado---------")

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
};

console.log("-------For anidado añadiendo similitudes a una constante vacia--------")
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};
console.log(mutualFollowers);
/* 1.
Nos gustaría un programa para simular parte del proceso de horneado de pasteles.
Dependiendo de la receta, se requiere una cantidad diferente de tazas de azúcar.
Cree la variable cupsOfSugarNeededy asígnele un valor numérico de su elección.
Las tazas de azúcar deben agregarse a la masa una a la vez.
Declare la variable cupsAddedy asígnele el valor 0.
2.
Somos golosos, por lo que queremos agregar al menos una taza de azúcar a la masa, 
incluso si el valor de cupsOfSugarNeededes 0.
Cree un do...whilebucle que se incremente cupsAddeden uno mientras cupsAddedes menor que cupsOfSugarNeeded.
Para ayudarnos a visualizar la salida en cada iteración del ciclo, agregue un console.
logdentro del do...whilebloque y registre el valor de cupsAdded. */
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
    cupsAdded++
    console.log(cupsAdded + " cup was added")
} while (cupsAdded < cupsOfSugarNeeded);