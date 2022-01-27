/*** 
 * archivo src/rest-spread-objetos.js 
 * PARA COMPILAR 
 * npx babel src/ -d dist/
 * 
 * ***/
function combinarObjetos(a, b) {
    return { ...a, ...b };
}
let a = { unaLlave: "un valor" },
b = { otraLlave: "otro valor" },
combo = combinarObjetos(a, b);
console.log(combo);