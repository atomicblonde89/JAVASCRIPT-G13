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

    get sonido(){
        return this._sonido
    }
}

class Leon extends Animal {

    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido);  
    }

    Rugir(){
        return this.sonido()
    }
}

let leonUno = new Leon('Leon','3 Años', 'leon.jpg','Tiene pulga','sonido.mp3')

let animal1 = new Animal(leonUno)
console.log( 'animal1---->', animal1 )