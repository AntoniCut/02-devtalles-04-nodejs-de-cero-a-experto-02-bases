/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /05-apply-factory.js  -------------------
    -----------------------------------------------------
*/



/**
 * @typedef {import('../types/types.js').Person} Person
 */


const { getUUID, getAge } = require('../plugins');
const { buildMakePerson } = require('../utils/factory');



console.clear();
console.log('--------------------------------------');
console.log('-------  05-apply-factory.js  ----------');
console.log('--------------------------------------\n\n');


//  ----- definimos los objetos  -----

/** @type {Person}  */
const obj1 = {
    name: 'John',
    birthday: '1985-10-21'
};


/** @type {Person}  */
const obj2 = {
    name: 'Jane',
    birthday: '1990-05-15'
};



//  ----- aplicamos el patron fabrica  -----
const makePerson = buildMakePerson({ getUUID,  getAge  });


//  ----- creamos las personas  -----
const person1 = makePerson(obj1);
const person2 = makePerson(obj2);


//  ----- mostramos el resultado por consola  -----
console.table({ person1, person2 });
console.log('\n\n');
