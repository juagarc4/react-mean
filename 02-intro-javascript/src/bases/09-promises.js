// // Promises
import {getHeroeById} from "./bases/08-import-export";
//
// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // Task: make getHeroeById usable by exporting/importing it.
//         const heroe = getHeroeById(8);
//         resolve(heroe);
//         // reject('Heroe not found');
//     }, 2000)
// });
//
// promise.then ( (heroe) => {
//     console.log('Then of the promise');
//     console.log(heroe);
// })
// .catch ( (err) => {
//     console.log('Catch of the promise');
//     console.warn(msg);
// })

// Task 2: Manage catch in promise
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Task: make getHeroeById usable by exporting/importing it.
            const heroe = getHeroeById(id);
            if ( typeof heroe === 'undefined' ) {
                reject('Heroe not found');
            } else {
                resolve(heroe);
            }

        }, 2000)
    });
}

// Task 3: Transform "then" to use the same syntax as catch
// getHeroeByIdAsync(8)
//     .then(heroe => console.log('Heroe', heroe))
//     .catch( console.warn);

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn)