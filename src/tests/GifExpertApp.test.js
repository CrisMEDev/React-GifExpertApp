import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('El componente debe mostrarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar una lista de categorias', () => {

        const categories = [ 'warframe', 'dark souls' ];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GifGrid').length ).toBe( 2 );
        
    });
    
    
    
});


