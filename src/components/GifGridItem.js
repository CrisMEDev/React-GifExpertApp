import React from 'react'

export const GifGridItem = ({ id, title='No title', url }) => {

    if ( title.trim() === '' ) title = 'No title';
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}
