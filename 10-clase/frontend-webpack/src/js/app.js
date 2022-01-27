import '../scss/app.scss';
import getHeroById from './06-import-export'

// DEMO PROMESAS CON PARAMETROS
const getHeroByIdAsync = (id) => {
    return new Promise( ( resolve, reject ) => {

        setTimeout(() => {
           
            const hero = getHeroById( id )

            if ( hero ) {
                resolve( hero )
            } else {
                reject('Heroe no existe')
            }

        }, 1000);
        

    });
}



getHeroByIdAsync(100)
    .then( h => {
        console.log(`El héroe es: ${ h.name }`)
    })
    .catch( console.log )


