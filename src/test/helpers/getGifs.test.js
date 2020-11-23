//import React from 'react';
//import {shallow} from 'enzyme';
//const { default: GifGridItem } = require("../../components/GifGridItem");
import {getGifs} from '../../helpers/getGifs'

describe('Prueba en el getGifs Fetch', () => {

    test('debe de traer 10 elementos correctamente', async() => {
 
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        expect(gifs.length).toBe( 10 );
    
    });

    test('debe de traer 0 elementos correctamente', async() => {
 
        const gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe( 0 );
    
    });
})
