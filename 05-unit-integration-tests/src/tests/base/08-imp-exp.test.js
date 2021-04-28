import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe ('Tets in functions', () => {
   test('It should returna an Heroy by id', () => {

        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect ( heroe ).toEqual( heroeData );

   });
    test('It should return undefined if heroe does not exist', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect ( heroe ).toBe( undefined );

    });

    // Tasks: It should return an array with heroes from DC
    // owner
    // Apply toEqual to the filtered array
    test('It should return an array with the DC Heroes', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner );

        expect ( heroes ).toEqual( heroesData );

    });

    // Tasks2: It should return an array with heroes from Marvel
    // toBe length = 2
    test('It should return an array with heroes from Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect ( heroes.length ).toBe( 2 );

    });


});