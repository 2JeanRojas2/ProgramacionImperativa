let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
];

const tiendaElectronica = {
    productos: electronicos,
    gananciaTotal: function() {
        let accu = 0;
        for (let i = 0; i < this.productos.length; i++) {
            const prod = this.productos[i];
            const totalDeProd = prod.precioEnUsd * prod.cantVendidos;
            accu += totalDeProd;
        }
        return accu
    },
    gananciaTotal2: function() {
        return this.productos.reduce(function(accu, prod) {
            return prod.cantVendidos * prod.precioEnUsd
        }, 0)
    },
    gananciaTotal3: function() {
        return this.productos.reduce(
            (accu, prod) => accu + prod.cantVendidos * prod.precioEnUsd, 0)
    },
    filtrarPorVendidos: function(cantidadMinima) {
        return this.productos.filter(
            (producto) => producto.cantVendidos >= cantidadMinima
        )
    },
    aumentarPrecio: function(porcentajeAumento) {
        return this.productos.map(
            (producto) => {producto.precioEnUsd += producto.precioEnUsd * porcentajeAumento / 100;
            return producto
            }
            )
    },
    
    listarTodos: function (arrayProductos){
        arrayProductos.forEach(
            (producto) => console.log("El producto " + producto.nombre
            + " Tiene un valor de " + producto.precioEnUsd)
        )
    }
}

const gananciaTotal = tiendaElectronica.gananciaTotal();
console.log('La ganancia total es: ' + gananciaTotal); 

const filtradosPorVendidos = tiendaElectronica.filtrarPorVendidos(2);
tiendaElectronica.listarTodos(filtradosPorVendidos);
console.table(filtradosPorVendidos);

const ProductosConInflacion = tiendaElectronica.aumentarPrecio(30);
tiendaElectronica.listarTodos(ProductosConInflacion);
console.table(ProductosConInflacion);
