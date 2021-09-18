import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el componente GifGridItem', () => {
    
    const data = {
        id: 123,
        title: 'Un titulo comun',
        url: 'https://myawesomeurl.com'
    };
    const wrapper = shallow( <GifGridItem {...data} /> );
    
    test('Debe de mostrar el componente <GifGridItem /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de tener un parrafo con el title', () => {
        
        const titulo = wrapper.find('p');

        expect( titulo.text().trim() ).toBe( data.title );

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        
        // console.log( img.html() );  // Para ver la etiqueta obtenida
        // console.log( img.props() );  // Para obtener las propiedades de la etiqueta como un objeto
        // console.log( img.prop('src) );  // Para obtener la propiedad de la etiqueta como un string

        expect( img.prop('src') ).toBe( data.url );
        
    });

    test('Debe de tener la clase animate__bounce', () => {

        const div = wrapper.find('div');

        // expect( div.prop('className').includes('animate__bounce') ).toBe(true);
        expect( div.hasClass('animate__bounce') ).toBe(true);
        
    });
    
    
    
});
