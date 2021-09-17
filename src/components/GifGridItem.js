import React from 'react'

export const GifGridItem = ({ id, title='No title', url }) => {

    if ( title.trim() === '' ) title = 'No title';
    
    return (
        <div>
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}