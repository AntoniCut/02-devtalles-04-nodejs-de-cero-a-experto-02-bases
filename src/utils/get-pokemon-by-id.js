/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/utils/  ----------------------------
    ----------  /get-pokemon-by-id.js  ------------------
    -----------------------------------------------------
*/


const { httpClient } = require('../plugins');


/**
 * --------------------------------------------
 * -----  `getPokemonById(id, callback)`  -----
 * --------------------------------------------
 * 
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando un callback.
 * 
 * @param {number} id - Identificador del pokemon a buscar.
 * @param {(pokemon: { name: string }) => void} callback - Función callback que se ejecuta con el Pokémon obtenido.
 * @returns {void}
 * 
 */

const getPokemonByIdWithCallback = (id, callback) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)

        .then(resp => {

            //console.log(resp);
            resp.json()

                .then(pokemon => {

                    //console.log('pokemon => ', pokemon.name);
                    callback(pokemon.name);

                })

        })

        .catch(err => console.warn(err));

}



/**
 * ----------------------------------------------
 * -----  `getPokemonByIdWithPromises(id)`  -----
 * ----------------------------------------------
 * 
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Promesas.
 * 
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 * 
 */

const getPokemonByIdWithPromises = ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return new Promise((resolve, reject) => {
        
        fetch(url)
            .then(resp => resp.json())
            .then(pokemon => resolve(pokemon.name))
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });

}



/**
 * ------------------------------------------------
 * -----  `getPokemonByIdWithAsyncAwait(id)`  -----
 * ------------------------------------------------
 * 
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Async/Await.
 * 
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 * 
 */

const getPokemonByIdWithAsyncAwait = async ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        
        const resp = await fetch(url);
        const pokemon = await resp.json();
        return pokemon.name;

    } catch (error) {
        console.error(error);
        throw error;
    }

}



/**
 * ------------------------------------------------
 * -----  `getPokemonByIdWithAsyncAwait(id)`  -----
 * ------------------------------------------------
 * 
 * - Obtiene un Pokémon de la PokéAPI por su ID utilizando Async/Await.
 * 
 * @param {number} id - Identificador del pokemon a buscar.
 * @returns {Promise<string>} - Promesa que se resuelve con el nombre del Pokémon obtenido.
 * 
 */

const getPokemonByIdWithFetchAPI = async ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClient.get(url);
    return pokemon.name;
   

}




//  -----  Exportaciones -----
module.exports = {
    getPokemonByIdWithCallback,
    getPokemonByIdWithPromises,
    getPokemonByIdWithAsyncAwait,
    getPokemonByIdWithFetchAPI,
}
