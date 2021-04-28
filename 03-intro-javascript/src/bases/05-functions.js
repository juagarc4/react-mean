// Functions

// Wha we don't use functions in this way
// function greeting( name ){
//     return `Hola, ${ name }`;
// }

// greeting = 30;
// Console ,log will show a warning.
// console.log(greeting);

// Now the console shows an error.
const greeting = function ( name ) {
    return `Hola, ${ name }`;
}

// Lambda function
const greeting2 =( name ) => {
    return `Hola, ${ name }`;
}

// Lambda function simplyfied.
const greeting3 =( name ) => `Hola, ${ name }`;
const greeting4 = () => `Hola, Mundo`;

// console.log(greeting);
// console.log(greeting2('Vegeta'));
// console.log(greeting3('Goku'));
// console.log(greeting4());
const getUser = () => {
    return {
        uid:'ABCD123',
        name: 'user',
    }
}

// Simplyfied version using lambda functions
// and returning implcit object.
const getUser2 = () => ({
        uid:'ABCD123',
        name: 'user',
});

// console.log(getUser());
// console.log(getUser2());

//Tasks
// 1.- Convert normal function into lamba fnction
// 2.- Return an implicit obkect
// 3.- Check it returns the same.
function getActiveUser ( name ){
    return {
        uid:'ABCD123',
        username: name,
    }
}

const activeUser = getActiveUser('Raul');
console.log('Using function and object');
console.log(activeUser);

// Solution
console.log('Using lamba function and implicit object');
const getActiveUser2 = ( name ) => ({
        uid: 'ABCD123',
        username: name,
    }
);
const activeUser2 = getActiveUser2('Raul');
console.log(activeUser2);
