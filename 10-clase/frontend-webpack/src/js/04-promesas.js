console.log('INICIO')

// Podemos invoocar una promesa desde ECMA6 ya esta incluido
// JAVASCRIPT ejecuta sólo el cuerpo de la promesa.
// Pero la respuesta de la promesa lo deja en una pila de callback diferente

new Promise((resolve, reject)=>{
    // Cuerpo de la promesa
    console.log('Cuerpo de la promesa')
    // Tanto como resolve y reject son una función
    //resolve('Promesa resuelta')
    reject('Promesa resuelta con error')
    // Puede retornar un objeto,boleano, string
    // .then() retorna ya sea el resolve o el reject
})
.then( msg => console.log(msg) )
.catch(err => console.log(err))

console.log('FIN')