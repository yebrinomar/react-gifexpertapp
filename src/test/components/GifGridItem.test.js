import React from 'react';
import {shallow} from 'enzyme';
//const { default: GifGridItem } = require("../../components/GifGridItem");
import {GifGridItem} from '../../components/GifGridItem'

describe('Prueba en el <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow(<GifGridItem title = {title} url = {url} />);

    // beforeEach(() => {
    //     console.log('beforeEach!!!')
    //     wrapper = shallow(<GifGridItem />);
    // })

    test('debe de mostrar <GifGridItem /> correctamente', () => {
 
        expect(wrapper).toMatchSnapshot();
    
    });

    test('debe de tener un párrafo con el title', () => {

        const p = wrapper.find('p').text().trim();        
        expect( p ).toBe( title );
        
    }); 

    
    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');        
        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title )
        
    }); 

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');  
        const className = div.prop('className'); 
        expect( className.includes('animate__fadeIn')).toBe( true );
        
    }); 
})
