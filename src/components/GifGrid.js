//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // useEffect( ()=> {
    //     getGifs(category)
    //     .then(setImages);
    // }, [category])

    return ( 
        <>
            <h3 className="card animate__animated animate__fadeIn"> {category} </h3>  
            {loading && <p className="card animate__animated animate__flash">Loading</p>}
            <div className="card-grid">

                {
                    images.map( img => {
                        return <GifGridItem  
                            key={img.id}
                            {...img}
                            //img = {img} 
                        />
                    })
                }
            </div>
        </>
       
    )
}
