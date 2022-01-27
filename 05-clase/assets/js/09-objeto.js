/*
=======Objetos====================================
1. Objetos
=========================================================================
*/

let pelicula = {
    titulo:'Batman vs Superman',
    year:2017,
    pais:'Estados Unidos'
}


let peliculas =[
    {titulo:'Spiderman',year:2015,pais:'China'},
    pelicula
]

console.log(peliculas)

for(let index in peliculas){
    console.log(peliculas[index].pais)
}

console.log(peliculas[0].pais)
