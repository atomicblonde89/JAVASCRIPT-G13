/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/
let nombre = 'Juan Perez';
let nombres = ['Jorge Rojas','Pedro Fernandez','Pedro Torres', 46, true];
let lenguajes = new Array('PHP', 'JS','Vue', 'Java');

// console.log(nombres.length);
// let elemento = parseInt(prompt('Que elemento del array deseas?',0));

// if(elemento >= nombres.length){
//     alert(`Introduce el numero correcto menor que ${nombres.length}`)
// }else{
//     alert(`El usuario seleccionado es:${nombres[elemento]}`)
// }

document.write('<h2 class="container">Lista de lenguajes de programación 2021</h2>')
document.write('<ul class="container list-group">')
        for(let i = 0; i < lenguajes.length; i++){
            console.log('El dato de i', i)
            document.write(`<li>${lenguajes[i]}</li>`)
        }
document.write('</ul>')








