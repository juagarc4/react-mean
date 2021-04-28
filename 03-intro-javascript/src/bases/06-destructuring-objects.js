
//Destructuring_assignment
//@see: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

const person = {
    name: 'John',
    age: 34,
    password: 'Ironman'
}
console.log('Without destructuring');
console.log( person.name );
console.log( person.age );
console.log( person.password );

// Destructuring
console.log('With destructuring');
const { name: name2 } = person;
const { name, age, password } = person;

// console.log(name2);
// console.log(name);
// console.log(age);
// console.log(password);

const useContext = ( { name, age, password, role = 'admin' } ) => {
 // console.log(name, age, password, role);
    return {
        keyName: password,
        ages: age,
        latlng: {
            lat:14.343455,
            lng: 123.23423423,
        }
    }
}
// Version 1

// const {keyName, ages, latlng: {lat, lng}} = useContext( person )

// Version 2: Most usual
const {keyName, ages, latlng} = useContext( person );
const {lat, lng} = latlng;

console.log(keyName, ages);
console.log(lat, lng);
