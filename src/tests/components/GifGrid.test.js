import React from 'react';
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    
    test('Debe de mostrar el componente correctamente', () => {
        
        // Se define un mock para useFetchGifs que simula la implementacion de la funcion
        useFetchGifs.mockImplementation(() => {
            return {
                data: [],
                loading: true
            };
        });

        const wrapper = shallow( <GifGrid category={'warframe'} /> );
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ascnascknasc',
                title: 'My awesome title',
                url: 'https://the_best_url.jpg'
            },
            {
                id: 'ascascasc',
                title: 'My awesome title 2',
                url: 'https://the_best_url2.jpg'
            }
        ];
        
        // Se define un mock para useFetchGifs que simula la implementacion de la funcion
        useFetchGifs.mockImplementation(() => {
            return {
                data: gifs,
                loading: false
            };
        });

        const wrapper = shallow( <GifGrid category={'warframe'} /> );

        expect( wrapper ).toMatchSnapshot();

        // Asegurarse de que como hay data, el parrafo de 'cargando...' no se renderiza
        expect( wrapper.find('p').exists() ).toBe( false );

        // Evaluar si el componente GifGridItem existe el numero gifs de veces
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
         
    });
    
    
});


