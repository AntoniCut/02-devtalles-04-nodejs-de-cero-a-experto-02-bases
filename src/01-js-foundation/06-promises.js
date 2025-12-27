/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /06-promises.js  ------------------------
    -----------------------------------------------------
*/


console.clear()
console.log('------------------------------------');
console.log('-------  06-promises.js  ----------')
console.log('-----------------------------------\n\n');


const { getPokemonByIdWithCallback, getPokemonByIdWithPromises } = require('../utils/get-pokemon-by-id');


//  -----  funcion con callback -----
getPokemonByIdWithCallback(1, ( pokemon ) => {
 
    console.log('Callback Pokemon name: ', { pokemon });
    
});


//  -----  funcion con promesas -----
getPokemonByIdWithPromises(2)
    .then( pokemon => console.log('Promise Pokemon name: ', { pokemon }) )
    .catch( err => console.error('err => ', err) )
    .finally( () => console.log('Finally: Operación de obtención de Pokémon finalizada con Promesas.') );