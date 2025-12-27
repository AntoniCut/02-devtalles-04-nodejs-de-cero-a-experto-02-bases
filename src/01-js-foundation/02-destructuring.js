/*
    -----------------------------------------------------
    ----------  /devtalles.antonydev.tech/  -------------
    ----------  /07-nodejs-de-cero-a-experto/  ----------
    ----------  /02-bases/  -----------------------------
    ----------  /src/01-js-foundation/  -----------------
    ----------  /02-destructuring.js  -------------------
    -----------------------------------------------------
*/


console.clear();
console.log('-------------------------------------------');
console.log('----------  02-destructuring.js  ----------')
console.log('-------------------------------------------\n\n');


//console.log('process => ', process);

//console.log('variablesEntorno => ', process.env);


//  -----  Desestructuring Objeto  -----
const { PORT, DB_HOST, DB_USER, DB_PASSWORD, SHELL } = process.env;

console.warn('\nDestructuring Variables de Entorno => \n\n');

console.table({ 
    'PORT': PORT ?? 3000,
    'DB_HOST': DB_HOST ?? 'localhost',
    'DB_USER': DB_USER ?? 'root',
    'DB_PASSWORD': DB_PASSWORD ?? 'rootpassword',
    'SHELL': SHELL ?? '/bin/bash' 
});


//  -----  Desestructuring Arreglo  -----
const character = [ 'Flash', 'Superman', 'Batman' ];

const [ , , batman ] = character;

console.warn('\nDestructuring Arreglo => \n\n');

console.log('batman => ', batman);

