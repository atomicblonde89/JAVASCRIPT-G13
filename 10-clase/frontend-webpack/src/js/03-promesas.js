console.log('INICIO')

// Podemos invoocar una promesa desde ECMA6 ya esta incluido
// JAVASCRIPT ejecuta sólo el cuerpo de la promesa.
// Pero la respuesta de la promesa lo deja en una pila de callback diferente

new Promise((resolve, reject)=>{
    // Cuerpo de la promesa
    console.log('Cuerpo de la promesa')
})

console.log('FIN')