import superHeroes from './data/heroes';


const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id );
export default getHeroById;
