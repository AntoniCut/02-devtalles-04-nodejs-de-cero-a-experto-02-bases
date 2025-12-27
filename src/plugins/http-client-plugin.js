/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/plugins/  --------------------------
    ----------  /http-client-plugin.js  -----------------
    -----------------------------------------------------
*/


/**
 * - `patrón adaptador que envuelve el fetchAPI`
* @typedef {import('../types/types.js').HttpClient} HttpClient
 */


const axios = require('axios').default;

/**
 * --------------------------------
 * -----  `httpClientPlugin`  -----
 * --------------------------------
 * 
 * - Implementación del patrón adaptador para el cliente HTTP utilizando fetch API.
 * 
 * @type {HttpClient}
 * 
 */

const httpClientPlugin = {

    get: async(url) => {
    
        //  -----  usando fetch API  -----
        // const resp = await fetch(url);
        // return await resp.json();
        
        //  -----  usando axios  -----
        const { data } = await axios.get(url);
        return data;
    },

    post: async(url, body) => { },
    put: async(url, body) => { },
    delete: async(url) => { }

};


module.exports = {
    httpClient: httpClientPlugin,
}

