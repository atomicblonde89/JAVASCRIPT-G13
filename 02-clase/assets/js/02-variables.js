//VARIABLES
//Una variable es un contenedor de información.
//La palabra reservada var define a una variable
//Cadenas de texto van entre comillas, pueden ser reasignadas o pueden mutar y están sujetas al Hoisting
var pais       = "Chile";
var continente = "Latino America";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;

pais = "España";
continente = "Europa";
console.log (pais, continente, antiguedad, 'Pais y continente-->', pais_y_continente);
alert(pais_y_continente);
