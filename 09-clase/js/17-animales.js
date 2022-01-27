class Animal {

    constructor(nombre,edad,img,comentarios,sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido
    }

    get nombre(){
        return this._nombre
    }

    get edad(){
        return this._edad
    }

    get img(){
        return this._img
    }

    get comentarios(){
        return this._comentarios
    }

    set comentarios(nuevo_comentario){
        this._nuevo_comentario = nuevo_comentario
    }

    get sonido(){
        return this._sonido
    }
}

class Leon extends Animal {

    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);  
    }

    Rugir(){
        return this._sonido
    }
}

let animal1 = new Leon('Leon','3 Años', 'leon.jpg','Tiene pulgas','leon.mp3')


animal1.comentarios = 'Y con garrapatas'
// let animal1 = new Animal(leonUno)
animal1.comentario = 'tiene Garrapatas'
console.log(animal1.comentario);

console.log( 'animal1---->', animal1 )
console.log( `El animal es un ${animal1.nombre}`)
console.log( `Su edad es ${animal1.edad}`)
console.log( `El comentario del ${animal1.nombre} es que ${animal1.comentario}`)
console.log( `La imagen del ${animal1.nombre} es ${animal1.img}`)

console.log(`El Sonido del León es ${animal1.Rugir()}`)