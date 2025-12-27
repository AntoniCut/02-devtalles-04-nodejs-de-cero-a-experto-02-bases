/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/plugins/  --------------------------
    ----------  /get-age-plugin.js  ---------------------
    -----------------------------------------------------
*/


//  -----  Importamos el plugin `get-id` - patron adaptador  -----
const { v4: uuid4} = require('uuid');


/**
 * -------------------------
 * -----  `getUUID()`  -----
 * -------------------------
 * 
 * - Obtiene un ID único.
 * 
 * @returns {number|string}
 * 
 */

const getUUID = () => uuid4();


module.exports = {
    getUUID,
}

