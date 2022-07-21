//Array de objetos
const Productos = [
    { id: 1, nombre: "Parasite in Love", precio: 500, stock: 5},
    { id: 2, nombre: "Asper Girl", precio: 300, stock: 10},
    { id: 3, nombre: "Servant x Service", precio: 500, stock: 15},
    { id: 4, nombre: "Thank You", precio: 250, stock: 5},
    { id: 5, nombre: "Utsubora", precio: 200, stock: 10}
];

//Carrito de compras
let carrito = [];

const resultado1 = Productos.find((producto) => producto.id === 1)
const resultado2 = Productos.find((producto) => producto.id === 2)
const resultado3 = Productos.find((producto) => producto.id === 3)
const resultado4 = Productos.find((producto) => producto.id === 4)
const resultado5 = Productos.find((producto) => producto.id === 5)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)

//Metodo de entrada
let comando = prompt("Ingrese un comando")

//Procesos y salidas
while(comando !="cancelar"){
    switch(comando){
        case "agregar 1":
            carrito.push(resultado1)
            break
        case "agregar 2":
            carrito.push(resultado2)
            break
        case "agregar 3":
            carrito.push(resultado3)
            break
        case "agregar 4":
            carrito.push(resultado4)
            break
        case "agregar 5":
            carrito.push(resultado5)
            break
        case "consultar carrito":
            console.log(carrito)
            break
        case "consultar total":
            const total = carrito.reduce((total, producto) => total + producto.precio, 0)
            console.log(total)
            break
        case "eliminar producto del carrito":
            carrito.pop()
            break
    }
    comando = prompt("Ingrese un comando")
}