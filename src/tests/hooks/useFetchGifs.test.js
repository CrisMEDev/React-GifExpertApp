import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'warframe' ) ); // Crea un componente virtual para colocar el customHook
        const { data, loading } = result.current;

        // En este test no es necesario usar el waitForNextUpdate, sin embargo,
        // una vez que el componente es usado, cuando llega a la parte del useEffect
        // al ser una promesa el componente terminar la ejecución
        // y ejecuta el setState cuando el componente sobre el que corria
        // el useFetchGifs ya fue desmontado lo que marca un error en consola
        // afectando las demas pruebas, en este caso la prueba debajo es la unica en la que se
        // requeriria el waitForNextUpdate
        await waitForNextUpdate({timeout: 1500});

        // Obtiene la respuesta del useFetchGifs
        // console.log({ data, loading });

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );

    });
    
    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'warframe' ) ); // Crea un componente virtual para colocar el customHook
        
        await waitForNextUpdate({timeout: 1500});
        
        const { data, loading } = result.current;
        console.log(data);

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    

});



