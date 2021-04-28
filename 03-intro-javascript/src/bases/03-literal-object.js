
const person = {
    name: 'Raul',
    surname: 'Garcia',
    age: 45,
    address: {
        city: 'New York',
        zip: 34567,
        lat: 14.3232,
        long: 34.9233321,
    }
};

// console.table(person);

// ERROR. The varribale is not cloned, only referenced
// const person2 = person;

// Now it's cloned properly
const person2 = {...person};
person2.name = 'Peter';

// If the object is cloned properly we will see 2 different values.
console.log(person);
console.log(person2);
