/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/utils/  ----------------------------
    ----------  /users-arrow-functions.js  --------------
    -----------------------------------------------------
*/


/**
 * ----- Importamos el tipo `User` desde el archivo de tipos  -----
 * @typedef {import('../types/types.js').User} User
 */


/**
 * ---------------------
 * -----  `users`  -----
 * ---------------------
 * 
 * - Array de objetos de usuario con propiedades `id` y `name`.
 * 
 * @type {User[]}
 * 
 */

const users = [

    {
        id: 1,
        name: 'Jhon Doe',
    },

    {
        id: 2,
        name: 'Jane Doe',
    },

];


/**
 * -------------------------------
 * -----  `getUserById(id)`  -----
 * -------------------------------
 * 
 * - Función que recibe un `id` y devuelve el objeto de usuario con ese `id`.
 * 
 * @param {number} id - Identificador del usuario a buscar.
 * @param {(error: Error|null, user?: User) => void} callback - Función de callback que maneja el resultado.
 * 
 */

const getUserById = (id, callback) => {

    /**  
     * - usuario encontrado o `undefined` si no se encuentra.
     * @type {User|undefined}  
     */

    const user = users.find((user) => user.id === id);

    (user)
        ? callback(null, user)
        : callback(new Error(`User not found with ID ${id}`));

}


//  -----  Exportaciones -----
module.exports = {
    users,
    getUserById,
};

