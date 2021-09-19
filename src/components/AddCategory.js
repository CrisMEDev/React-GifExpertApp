import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');   // Valor por defecto en la caja input

    const handleInputChange = (event) => {
        setInputValue( event.target.value );
    };

    const handleSubmit = (event) => {
        event.preventDefault();     // Evitar el refresh del navegador con form

        if ( inputValue.trim().length > 2 ){
            // Se cambia el valor en la lista con el nuevo estado del input value
            setCategories(cats => [ inputValue, ...cats]);

            setInputValue('');
        }

    };

    return (
        // EL onSubmit es atrapado en el event del handleSubmit
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
