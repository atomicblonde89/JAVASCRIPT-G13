// FIND crea un arreglo nuevo en base al primer resultado que sea true...

const carritos = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


// con un foreach seria algo asi...
let resultado = '';
carritos.forEach((gato,indice,RATON) => {
    
       console.log(`El producto, ${gato.nombre} , el indice es ${indice}`)

});
//console.log('Resultado con forEach--->', resultado);


// Con .find seria
//const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas');
// console.log(resultado2);
