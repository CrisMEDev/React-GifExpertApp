import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('warframe');

        expect( gifs.length ).toBe( 10 );

    });

    test('debe de traer 0 elementos si no hay categoria', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });

});



