describe('Tests in demo.test.js', () => {

    test('strings should be equal', () => {

        // 1. Init
        const msg = 'Hello world';

        // 2. Needle
        const msg2 = `Hello world`

        // 3. Observe
        expect(msg).toBe(msg2);
    });
});