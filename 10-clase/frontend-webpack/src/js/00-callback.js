/*=====TRADUCCION DE CAALBACK=====
    Llamar de vuelta    
    Javascript es un lenguaje de programación interpretado 
    por lo tranto el código se ejecuta de arriba hacia abajo y el
    del código de devuelve inmediatamente .

    Supongamos que las funciones son validaciones por lo tanto deben 
    ejecutarse una primero y luego la otra en ese escenario todo okey.

    Ahora en otro escenario , que pasa si en la primera funcion tenemos una demora en su respuesta
    ejemmplo hace una petición a una API, como estamos trabajando en internet 
    la respuesta puede demorar o puede tener un error.

    Para simular la demora usaremos la funcion setTimeout(), esta tiene dos parametros una funcion 
    que se ejecuta  y la otra el tiempo o lapso de la respuesta o deley.

    Si esperas que la respuesta de la ejecución de las funciones sea en el orden esperado esto no 
    va a suceder dado que se ejecutara primero:
        
        -Primero se carga segundo 
    SEGUNDO
        -Luego pasan los tres segundos y luego carga 
    PRIMERO

    Como solucionamos esto es a través de un callback , un callback nos permite recibir como
    parametro a otra función.

    IMPORTANTE:
    Los Callback son simplemnte una forma para asegurarnos de que un determinado código 
    No se ejecuta hasta que otro código haya terminado de ejecutarse

*/

/* 
    ESCENARIO UNO
    function primero(){
        console.log('PRIMERO')
    }

    function segundo(){
        console.log('SEGUNDO')
    }

    primero();
    segundo();
*/

/*====ESCENARIO DOS ====
    function primero(){
        setTimeout(function(fn) {
            console.log('PRIMERO')
        }, 3000);

    }

    function segundo(){
        console.log('SEGUNDO')
    }

    primero();
    segundo();
*/

/*====SOLUCION CON CALLBACK=======




*/

function primero(segundo){
    setTimeout(function(fn) {
        console.log('PRIMERO')
        segundo()
    }, 3000);

}

function segundo(){
    console.log('SEGUNDO')
}

primero(segundo);
