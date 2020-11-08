import {retornaArreglo} from "../../base/07-deses-arr";

describe('Destructuring Tests', () => {
    test('It should return an string and a number', () => {
        // const arr = retornaArreglo(); // ['ABC', 123]
        // expect(arr).toEqual(['ABC', 123]);

        const [letras, num] = retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(num).toBe(123);
        expect(typeof num).toBe('number')
    });
});