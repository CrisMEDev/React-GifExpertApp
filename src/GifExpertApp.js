import React, {useState} from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Warframe', 'God of war', 'Dark souls']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Se pasa la referencia a setCategories al componenteAdcategories */}
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category =>    
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );

}


export default GifExpertApp;
