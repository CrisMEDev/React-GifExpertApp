import React, {useState} from 'react';



const GifExpertApp = () => {

    // const categories = ['Warframe', 'God of war', 'Dark souls'];

    const [categories, setCategories] = useState(['Warframe', 'God of war', 'Dark souls']);

    const newGame = 'Assassins creed';
    
    const handleAdd = (event) => {
        
        // setCategories( [...categories, newGame] );
        setCategories(  cats => [...cats, newGame] );

    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button id="btnAgregar" onClick={ handleAdd } >Agregar</button>

            <ol>
                {
                    categories.map( categorie => {
                        return (
                            // El key siempre sera ell mismo elemento que se coloca
                            <li key={categorie} >{categorie}</li>
                        )
                    })
                }
            </ol>
        </>
    );

}


export default GifExpertApp;
