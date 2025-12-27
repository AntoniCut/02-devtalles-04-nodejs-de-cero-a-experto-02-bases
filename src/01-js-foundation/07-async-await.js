/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /07-async-await.js  ---------------------
    -----------------------------------------------------
*/


console.clear()
console.log('------------------------------------');
console.log('-------  07-async-await.js  ----------')
console.log('-----------------------------------\n\n');


const { getPokemonByIdWithAsyncAwait } = require('../utils/get-pokemon-by-id');


//  -----  funcion con async/await -----
getPokemonByIdWithAsyncAwait(4)
    .then(pokemonName => console.log('pokemonName => ', pokemonName))
    .catch(err =>console.error('err => ', err))
    .finally(() => console.log('Finally: Operación de obtención de Pokémon finalizada con Async/Await.'));
    

