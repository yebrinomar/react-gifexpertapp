import React, {useState} from 'react';  
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])  
    
    // const handleAdd  = (e) => { 
    //     //console.log(e)
    //     //setCategories(['HunterXHunter', ...categories]);
    //     setCategories(cats => [...cats, 'HunterXHunter' ]);  
    // } 

     return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid 
                                    key={category} 
                                    category = { category }
                               />
                        //return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
        );
}


export default GifExpertApp;
