import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, url }) => {

    if ( title.trim() === '' ) title = 'No title';
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

GifGridItem.defaultProps = {
    title: 'No title',
}
