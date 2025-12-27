/*
    ---------------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -----------------
    ----------  /07-nodejs-de-cero-a-experto/  --------------
    ----------  /02-bases/  ---------------------------------
    ----------  /src/01-js-foundation/  ---------------------
    ----------  /08-fetch-api-patron-adaptador.js  ----------
    ---------------------------------------------------------
*/


console.clear()
console.log('-----------------------------------------------------');
console.log('-------  08-fetch-api-patron-adaptador.js  ----------');
console.log('------------------------------------------------------\n\n');


const { getPokemonByIdWithFetchAPI  } = require('../utils/get-pokemon-by-id');


//  -----  funcion con fetchAPI - patron adaptador  -----
getPokemonByIdWithFetchAPI(20)
    .then( pokemonName => {
        console.log('pokemonName => ', pokemonName);
    })
    .catch( err => console.warn(err) );

    

