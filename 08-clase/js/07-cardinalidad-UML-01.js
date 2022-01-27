/*
    Crear dos objetos mediante funciones constructoras, uno para “Mascota” y otro para
    “Persona”, luego se debe instanciar cada uno de ellos, pero en la instancia del objeto
    “Persona” se debe pasar como argumento el objeto instanciado en “Mascota”, todo esto se
    debe realizar según las indicaciones mostradas en el diagrama UML en la imagen anterior.
    Por lo tanto, sigamos los siguientes pasos:  
*/

function Persona(nombre, mascota){
    this.nombre = nombre;
    this.mascota = mascota;
}

function Mascota(nombre){
    this.nombre = nombre;
}

var m1 = new Mascota('Snowball');
var p1 = new Persona('Julián', m1);

console.log(p1);
console.log(m1);

function Empresa(nombre,direccion,persona){
    this.nombre = nombre;
    this.direccion = direccion;
    this.persona = persona;
}

function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}
var personaEmp1 = new Persona('Alex',45)
var empresa1 = new Empresa('Nike','Los Angles', personaEmp1)


console.log(empresa1)
console.log(personaEmp1)