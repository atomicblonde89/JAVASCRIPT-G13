/*
    *******PASARLO A CLASS*************

    function Usuario(nombre, rut) {
        this.nombre = nombre;
        this.rut = rut;
    }

    Usuario.prototype.saludar = function(){
        console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
    }

    var u1 = new Usuario('Jocelyn','17.123.456-7');
    u1.saludar();

*/

class Usuario {

    constructor(nombre,rut){
        this.nombre = nombre;
        this.rut = rut;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} y mi rut es: ${this.rut}`);
    }
}

let u1 = new Usuario('Jocelyn','17.123.456-7');
console.log(u1.saludar());

class Rectangulo {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
    calcularArea() {
        return this.x * this.y;
    }
    calcularPerimetro() {
        return (this.x + this.y) * 2;
    }
}

class Circulo {
    constructor(r) {
        this.r = r;
    }
    calcularArea() {
        return this.r * this.r * Math.PI;
    }
    calcularPerimetro() {
        return this.r * Math.PI * 2;
    }
}

let rectangulo1 = new Rectangulo(3,4);
console.log(rectangulo1.calcularArea());
console.log(rectangulo1.calcularPerimetro());
let circulo1 = new Circulo(3);
console.log(circulo1.calcularArea());
console.log(circulo1.calcularPerimetro());


