import React from 'react'

import { GifGridItem } from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            { loading ? <p>Cargando...</p> : null}
            <div className="card-grid">
                {
                    images.map( (gif) => <GifGridItem key={ gif.id } { ...gif } /> )
                }
            </div>
        </>
    )
}

export default GifGrid;
