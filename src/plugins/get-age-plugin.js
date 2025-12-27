/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/plugins/  --------------------------
    ----------  /get-age-plugin.js  ---------------------
    -----------------------------------------------------
*/


//  -----  Importamos el plugin `get-age` - patron adaptador  -----
const getAgePlugin = require('get-age');


/**
 * --------------------------------
 * -----  `getAge(birthday)`  -----
 * --------------------------------
 * 
 * - Calcula la edad a partir de la fecha de nacimiento.
 * 
 * @param {string} birthday 
 * @returns {number}
 * 
 */

const getAge = (birthday) => {

    if (!birthday) 
        throw new Error('Birthday is required');
    
    return getAgePlugin(birthday);

}


module.exports = {
    getAge,
}
