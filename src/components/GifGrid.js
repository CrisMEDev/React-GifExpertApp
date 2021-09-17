import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?api_key=qzf3ZJnMp0UZ8XWinWruIjcItFVeMi7D&limit=10&q=warframe';

        const respuesta = await fetch( url );
        const { data } = await respuesta.json();

        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });

        console.log(gifs);

        setImages( gifs );

    }


    return (
        <>
            <h3>{category}</h3>
            {
               images.map( (gif) => <GifGridItem key={ gif.id } { ...gif } /> )
            }
        </>
    )
}

export default GifGrid
