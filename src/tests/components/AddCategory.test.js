import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();    // Simula una funcion
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );;
    
    // Ejecutar estas acciones antes de cada prueba
    beforeEach( () => {
        
        jest.clearAllMocks();   // Para limpiar la data de funciones o simulaciones
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    });
    
    test('El componente debe mostrarse correctamente', () => {

        // Crea un snapshot del componente renderizado
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo';

        // El objeto mandado como argumento simula el evento del input
        input.simulate('change', { target: { value } });

        const inputAfterChange = wrapper.find('input');
        expect( inputAfterChange.prop('value') ).toBe( value );
        
    });
    
    test('No debe de postear la informacion con submit', () => {

        // wrapper.find('form').simulate('submit', { preventDefault(){} }); // Forma corta de una funcion en un objeto
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        // Evalua si la funcion setCategories no es llamada
        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('Debe de llamar el setCategories con una funcion y limpiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Mensaje en input';

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // Evalua si la funcion setCategories es llamada 1 vez
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        // Evalua que setCategories sea llamado con una función
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        // Evalua si la caja de texto es limpiada tras enviarse los datos en el form
        expect( input.prop('value') ).toBe( '' );
        
    });
    
    

});


