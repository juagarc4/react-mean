import {getUser, getActiveUser} from "../../base/05-funciones";

describe('Tests in 05-funciones.js', () => {
    test ('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });
    // getUsuarioActivo debe retornar un object

    test ('getActiveUser should return an object', () => {
        const userTest ={
            uid: 'ABC567',
            username: 'El_Papi1502'
        }

        const user = getActiveUser('El_Papi1502');

        expect(user).toEqual(userTest);
    });
});
