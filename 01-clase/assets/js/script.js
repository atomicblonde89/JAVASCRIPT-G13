/*
Algoritmo
Es un procedimiento para la resolucion de problemas de cualquier tipo
por medio de determinada secuencia de pasos. Generalmente es una descripcion de pasos
*/

// Comentarios de linea

/*
Cometarios de Bloque
*/

/*VARAIBLES EN JAVASCRIPT*/
var number = 7;
var numero = 7;
console.log('number --->', number);
console.log('numero --->',numero);

/*ECMScript 6 (ES6)*/
let uno = 1;
let dos = 2;
console.log('uno --->', uno);
console.log('dos --->',dos);

/*
    Diferencia entre var y let (El alcance de bloque) y concepto de bloques
    Bloque: Una sentencia block se utiliza para agrupar cero o mas sentencias
*/
var varExterno = 2;
let letExterno = 2;

{
    // Soy un bloque
    varExterno = 2 + 2;
    letExterno = 2 + 2;

    var varInterno = 5;
    let letInterno = 5;

    console.log('letInterno dentro de bloque --->',letInterno);
}

console.log('varExterno:',varExterno);
console.log('letExterno:',letExterno);
console.log('varInterno:',varInterno);
// Let respeta el ambito
//console.log('letInterno:',letInterno);

/*
    TIPOS DE DATOS
    Undefined:Un valor primitivo automaticamnete asignado a las variables.
    Que solo han sido declarados o a los argumentos formales para los cuales no existe 
    argumentos reales.

    Boolean: En ciencias de la informatica, un boolean es un dato logico que solo puede tener
    los valores tru o flase.

    Null: Un valor null representa una referencia que apunta, generalmente intencionadamente, a una
    inexistencia o ivalido objeto o direccion.

    Number: En JavaScript Number es un tipo de datos numerico

    String: Un String es una secuencia de caracteres usado para representar texto
*/

let booleano = true;
let valorNulo = null;
let numerico = 5;
let academia = 'Desafio Latam';

console.log('undefined: ', typeof variable);
console.log('Boolean: ', typeof booleano);
console.log('valorNulo: ', typeof valorNulo);
console.log('numerico: ', typeof numerico);
console.log('academia: ', typeof academia);


/*
    Constantes
    La diferencia con let y var es que las constantes no pueden ser reasignadas
*/
const CLAVE = 123456;
console.log('CLave --->', CLAVE);

/*
    Operadores en Javascript
*/
// Asignación
let asigacion = 'Desafío Latam';
console.log('asignación --->', asigacion);

// Adición
let adicion = 5;
adicion += 5;
console.log('adición --->', adicion);

// Sustracción
let sustraccion = 5;
adicion -= 5;
console.log('sustracción --->', sustraccion);

// Multiplicación
let multiplicacion = 5;
multiplicacion *= 5;
console.log('multiplicación --->', multiplicacion);

// Division
let division = 5;
division /= 2;
console.log('division --->', division);

// Resto (Modulo)
let resto = 34;
resto %= 5;
console.log('resto --->', resto);

// Exponenciacion
let exponenciacion = 3;
exponenciacion **= 3;
console.log('exponenciacion --->', exponenciacion);

/*
    Operadores de comparación
*/

let operandoUno = 5;
let opernadoDos = '5';
console.log('igualdad: ' + operandoUno + ' == ' + opernadoDos, operandoUno == opernadoDos);
console.log('igualdad estricta: ' + operandoUno + ' === ' + opernadoDos, operandoUno === opernadoDos);
console.log('mayor: ' + operandoUno + ' > ' + opernadoDos, operandoUno > opernadoDos);
console.log('menor: ' + operandoUno + ' < ' + opernadoDos, operandoUno < opernadoDos);
console.log('mayor ó igual: ' + operandoUno + ' >= ' + opernadoDos, operandoUno >= opernadoDos);
console.log('menor ó igual: ' + operandoUno + ' <= ' + opernadoDos, operandoUno <= opernadoDos);
console.log('desigualdad: ' + operandoUno + ' != ' + opernadoDos, operandoUno != opernadoDos);
console.log('desigualdad estricta: ' + operandoUno + ' !== ' + opernadoDos, operandoUno !== opernadoDos);

/*
    Concatenación de cadenas
*/

let stringUno = 'Desafío ';
let stringDos = 'Latam';
let concatenado = stringUno + stringUno;
console.log('concatenado: ', concatenado)

/*
    Template Strings
*/

let templateStringUno = 'Desafío';
let templateStringDos = 'Latam';
let templateString = `Academía ${templateStringUno} ${templateStringDos}, Chile!`;
console.log('templateString: ',templateString);





