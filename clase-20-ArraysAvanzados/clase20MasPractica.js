// ejercitacion limpia, publicada en clase 20, arrays avanzados
// 1
const numeros = [1, 5, 88, 96, 52, 7, 189];

function dividePorTotal(array) {
    const total = array.reduce((acum, numero) => acum + numero);
    const nuevoArreglo = array.map((numero) => numero / total);
    return nuevoArreglo;
}

const resultadoDivision = dividePorTotal(numeros);
console.log(resultadoDivision);

// 2
const palabras = ["vaso", "botella", "tablet", "mouse", "mate"];

function filtraLongitud(array, longitudMinima) {
    return array.filter((palabra) => palabra.length > longitudMinima);
}

const filtrados = filtraLongitud(palabras, 4);
console.log(filtrados);

// 3
const alumnos = [
    { nombre: "Ernesto", nota: 3 },
    { nombre: "Julia", nota: 8 },
    { nombre: "Paola", nota: 9 },
    { nombre: "Lucas", nota: 7 },
];

function ordenaObjeto(arrayDeObjetos, propiedad) {
    arrayDeObjetos.sort((a, b) => {
        return a[propiedad] > b[propiedad]
            ? 1
            : a[propiedad] < b[propiedad]
                ? -1
                : 0;
    });
}

ordenaObjeto(alumnos, "nombre");
console.table(alumnos);
ordenaObjeto(alumnos, "nota");
console.table(alumnos);

// Ejercicio Integrador
// 1
const verduleria = {
    mercaderia: [
        { nombre: "papa", precio: 15, cantidad: 5 },
        { nombre: "zanahoria", precio: 10, cantidad: 25 },
        { nombre: "cebolla", precio: 35, cantidad: 50 },
        { nombre: "naranja", precio: 40, cantidad: 18 },
        { nombre: "mandarina", precio: 32, cantidad: 13 },
    ],

    ganancia: function () {
        return this.mercaderia.reduce(
            (acum, prod) => acum + prod.precio * prod.cantidad,
            0
        );
    },

    buscaPorNombre: function (nombreBuscado) {
        return this.mercaderia.filter(
            (producto) => producto.nombre === nombreBuscado
        ).pop();

    },
    filtraPorVenta: function (ventasMinimas) {
        return this.mercaderia.filter(
            (producto) => producto.cantidad > ventasMinimas
        );
    },

    cambiaPrecio: function (nombreProducto, precioNuevo) {
        const producto = this.buscaPorNombre(nombreProducto);
        this.mercaderia[this.mercaderia.indexOf(producto)].precio = precioNuevo;
    },

    gananciasDespuesDeImpuestos: function (porcentajeImpuestos = 45) {
        const gananciaBruta = this.ganancia();
        return gananciaBruta * (1 - porcentajeImpuestos / 100);
    },
};

//1
const ganancia = verduleria.ganancia();
console.log(ganancia);

// 2
const mandarina = verduleria.buscaPorNombre("mandarina");
console.log(mandarina);

// 3
const ventasGrandes = verduleria.filtraPorVenta(30);
console.log(ventasGrandes);

// 4
verduleria.cambiaPrecio("papa", 20);
console.table(verduleria.mercaderia);

// 5
const gananciaNeta = verduleria.gananciasDespuesDeImpuestos();
console.log(gananciaNeta);
3 