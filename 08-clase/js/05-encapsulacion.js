/*

Por consiguiente, para lograr la protección 
de las propiedades de un objeto, existen diversas
formas de aplicar el Encapsulamiento, 
como lo son: Object.defineProperty(),
Object.freeze(), WeakMap, Closures y/o IIFE.

*/

function Estudiante(nombre){
    this.nombre = nombre;
}

let estudiante1 = new Estudiante('Juan');
console.log(estudiante1.nombre); // Juan

estudiante1.nombre = "Javier";
console.log(estudiante1.nombre); // Javier

/*
    =====ENCAPSULAMIENTO==========
    Todo funciona bien hasta el momento, pero, el código realizado
    anteriormente está sobreescribiendo la propiedad 
    sin estar encapsulada desde fuera del
    objeto sin utilizar métodos, lo cual, es una mala práctica y 
    no se debe hacer, para ello se
    deben implementar getters y setters, 
    tema que trataremos después de este inciso.

*/

function Estudiante(nombre){
    this.nombre = nombre;
}

var estudiante2 = new Estudiante('Juan');
console.log(estudiante1.nombre); // Juan

estudiante1.nombre = "Javier";
console.log(estudiante2.nombre); // Javier

/*

Por consiguiente, el resultado que aparecerá en la consola del navegador web será el nuevo
nombre “Javier”. Todo funciona bien hasta el momento, pero, el código realizado
anteriormente está sobreescribiendo la propiedad sin estar encapsulada desde fuera del
objeto sin utilizar métodos, lo cual, es una mala práctica y no se debe hacer, para ello se
deben implementar getters y setters, tema que trataremos después de este inciso.

*/

function Alumno(nombre){
    var getNombre = nombre;
    Object.defineProperty(this, "getNombre", {value: getNombre});
}

var alumno1 = new Alumno('Juan');
alumno1.getNombre = "Jocelyn";
console.log('alumno1--->',alumno1.getNombre);


/*
Crear una función constructora denominada “Usuario”, la cual reciba como parámetro el tipo
de usuario que ingresa a un sistema, es decir, si es Administrador, Invitado o Cliente; esta
propiedad debe llevar el nombre de “tipo”. Luego protege la propiedad mediante la creación
de una nueva variable local e implementando el método Object.defineProperty para
evitar cambios externos en las propiedades existentes en la función constructora.
*/

function Usuario(tipo){
    var getTipo = tipo;
    Object.defineProperty(this, "getTipo", {value: getTipo});
}

var usuario1 = new Usuario('Administrador')
usuario1.getTip = "Otro";
console.log('alumno1--->',usuario1.getTip);
