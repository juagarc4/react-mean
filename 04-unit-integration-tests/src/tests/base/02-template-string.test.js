import { getSaludo } from "../../base/02-template-string";

describe('Tests in 02-template-string.js', () => {
    test ('getSaludo should return Hola Raul', () => {
        const name = 'Raul';
        const greeting = getSaludo( name );

        expect(greeting).toBe('Hola ' + name);
    });

    // getSaludo must return "Hola Carlos!, if there isn't name argument
    test ('getSaludo must return "Hola Carlos!, if there isn\'t name argument', () => {

        const greeting = getSaludo( name );

        expect(greeting).toBe('Hola ' + name);
    });
})