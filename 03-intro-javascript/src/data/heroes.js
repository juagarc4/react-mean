
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// We can have more exports in one file.
export const owners = [ 'DC', 'Marvel'];
export default heroes;

// Another way to export, but recomended is the obove one.
// const owners = [ 'DC', 'Marvel'];
// export {
//     heroes as default,
//     owners
// }
