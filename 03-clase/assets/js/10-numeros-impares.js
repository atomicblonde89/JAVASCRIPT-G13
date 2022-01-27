/*
Mostar los números pares y contar los número impares
mediante un ciclo FOR para los numeros comprendidos entre
el 0 y el 20 (Incluidos ambos), pero cuando se llegue al 
número 10, el programa debe continuar y no mostarar el número 
en cuetión, igualmente, cuando se llegue al 19 el ciclo debe ser 
interrumpido y terminar su ejecuciíon
*/

var impar = 0;

for(let i = 0; i<=20; i++){

    if(i == 10){
        continue;
    }

    if(i == 19){
        break;
    }

    if(i % 2 == 0){
        console.log(`${i} <br>`);
    }else{
        impar++;
    }
}
console.log(`La cantidad de numeros impares es ${impar}`);