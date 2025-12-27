/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/utils/  ----------------------------
    ----------  /build-person.js  -----------------------
    -----------------------------------------------------
*/


/**
 *
 * @typedef {import('../types/types.js').Person} Person
 * @typedef {import('../types/types.js').PersonWithMeta} PersonWithMeta
 * 
 */


/**
 * ----------------------------------------------------
 * -----  `buildMakePerson({ getUUID, getAge })`  -----
 * ----------------------------------------------------
 * 
 * - `Función fábrica` que construye un creador de personas
 *
 * @param {{
     * getUUID: () => string|number,
     * getAge: (birthday: string) => number
 * }} deps - Dependencias necesarias para construir la persona.
 * 
 * @returns {(person: Person) => PersonWithMeta}
 * 
 */

const buildMakePerson = ({ getUUID, getAge }) => {

    return ({ name, birthday }) => {

        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }
    }

}


module.exports = {
    buildMakePerson,
}



/*
    !  ----------  sin dependencias externas  ----------  !

    const buildPerson = ({ name, birthday }) => {

        return {
            id: new Date().getTime(),
            name,
            birthday,
            age: new Date().getFullYear() - new Date(birthday).getFullYear()
        }

    };


    const john = buildPerson(obj);

    console.table({ john });
    console.log('\n\n');

*/


/*  
    !  ----------  con dependencias externas (plugins)  ----------  !

    const buildPerson = ({ name, birthday }) => {

        return {
            id: getUUID(),
            name,
            birthday,
            age: getAge(birthday)
        }

    };

    
    const john = buildPerson(obj);

    console.table({ john });
    console.log('\n\n');

*/