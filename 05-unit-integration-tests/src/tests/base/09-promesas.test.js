import heroes from "../../data/heroes";
import {getHeroeByIdAsync} from "../../base/09-promesas";

describe('Test with promises', () => {

    test ('getHeroByIdAsync should return a hereo async', ( done ) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect( heroe ).toBe( heroes[0]);
                done();
            })

    });
    test ('getHeroByIdAsync should return error if hereo by id does not exist', ( done ) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error  => {
               expect(error).toBe('No se pudo encontrar el héroe');
                done(); // It must be executed to said jest we are not awaiting for more results.
            });

    });

});