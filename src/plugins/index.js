/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/plugins/  --------------------------
    ----------  /index.js  ------------------------------
    -----------------------------------------------------
*/


const { getUUID } = require('../plugins/get-id-plugin');
const { getAge } = require('../plugins/get-age-plugin');
const { httpClient } = require('../plugins/http-client-plugin');


module.exports = {
    getUUID,
    getAge,
    httpClient,
}

