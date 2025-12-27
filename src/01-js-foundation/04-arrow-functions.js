/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /04-arrow-functions.js  -----------------
    -----------------------------------------------------
*/


const { getUserById } = require('../utils/users-arrow-functions');


console.clear()
console.log('------------------------------------------');
console.log('-------  04-arrow-functions.js  ----------')
console.log('------------------------------------------\n\n');


/** 
 * - Identificador del usuario a buscar.
 * @type {number}
 */

const id = 1;


getUserById(id, (error, user) => {

    //  -----  Manejo del Error  -----
    if (error) {
        console.error(`Usuario con id ${id} no encontrado`);
        throw new Error;
    }

    //  -----  Usuario Encontrado  -----
    console.table({ user });
    console.log('\n\n');

});
