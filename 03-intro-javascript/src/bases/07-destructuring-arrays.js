
const characters = ['Goku', 'Vegeta', 'Krilin'];

console.log('Without destructuring');
console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);

console.log('Without destructuring');
const [ ,, ch3 ] = characters;
console.log(ch3);

const returnArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArray();
console.log(letras, numeros)

// Task
// Destructuring the value returned by the function in two constants
// 1.- The first constant must be called "name"
// 2.- The second must be called "setName"

const useState = ( value ) => {
    return [ value, () => { console.log('Hola Mundo')}];
}

const [ name, setName ] = useState('Goku');
console.log(name);
setName();