/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /03-callbacks.js  -----------------------
    -----------------------------------------------------
*/


const { getUserById } = require('../utils/users-callbacks');


console.clear()
console.log('------------------------------------');
console.log('-------  03-callbacks.js  ----------')
console.log('------------------------------------\n\n');


/** 
 * - Identificador del usuario a buscar.
 * @type {number}
 */

const id = 1;



getUserById(id, function (error, user) {

    //  -----  Manejo del Error  -----
    if (error) {
        console.error(`Usuario con id ${id} no encontrado`);
        throw new Error;
    }

    //  -----  Usuario Encontrado  -----
    console.table({ user });
    console.log('\n\n');
      

});