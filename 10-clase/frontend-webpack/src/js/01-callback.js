// CALLBACK ECMA6
// const getName = callback => callback('John Doe')
// getName( name => console.log(name) ) // output: John Doe

// // CALLBACK ECMA5
// function getName(callback) {
//     callback('John Doe');
// }

// function callback(name){
//     console.log(name);
// }

// getName(callback);


const getName = ( callback ) =>{
    console.log('Salida de callback-->', callback)
    callback('Jhon')
    console.log('Salida de callback-->', callback)
}

getName( name => console.log(name) );