import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => setState({
                data: imgs,
                loading: false
            }));

    }, [ category ]);   // El category en el array indica que el effect se disapara cuando
                        // la categoria cambie

    return state;

}


export default useFetchGifs;
