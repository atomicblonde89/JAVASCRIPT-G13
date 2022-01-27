'use strict'
/*
=======ARRAY AVANZADOS====================================
1. Creación de array Avanzados
=========================================================================
*/

let nombre = 'Juan Perez';
let nombres = ['Jorge Rojas','Pedro Fernandez','Pedro Torres', 46, true];
let lenguajes = new Array('PHP', 'JS','Vue', 'Java');


document.write('<h2 class="container">Lista de lenguajes de programación 2021</h2>')
document.write('<ul class="container list-group">')

lenguajes.forEach((elemento,indice,arr)=>{
    console.log('Dato del elemento--->',elemento);
    console.log('Dato del indice--->',indice);
    console.log('Dato del indice--->',arr)
})

document.write('</ul>')






