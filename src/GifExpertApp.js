import React, {useState} from 'react';
import AddCategory from './components/AddCategory';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Warframe', 'God of war', 'Dark souls']);

    // const newGame = 'Assassins creed';
    
    // const handleAdd = (event) => {
        
    //     // setCategories( [...categories, newGame] );
    //     setCategories(  cats => [...cats, newGame] );

    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Se pasa la referencia a setCategories al componenteAdcategories */}
            <AddCategory setCategories={setCategories} />
            <hr />

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
