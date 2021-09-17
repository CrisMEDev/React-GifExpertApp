import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
    useEffect( () => {

        getGifs( category ).then( gifs => setImages( gifs ) );

    }, [category]);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                images.map( (gif) => <GifGridItem key={ gif.id } { ...gif } /> )
                }
            </div>
        </>
    )
}

export default GifGrid
