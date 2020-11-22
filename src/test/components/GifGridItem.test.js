import React from 'react';
import {shallow} from 'enzyme';
//const { default: GifGridItem } = require("../../components/GifGridItem");
import {GifGridItem} from '../../components/GifGridItem'

describe('Prueba en el <GifGridItem />', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo-jpg';

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
    
    // test('debe de incrementar con el boton +1', () => {
    //     const btn1 = wrapper.find('button').at(0).simulate('click');
    //     //console.log(btn1.html());
    //     const counterText = wrapper.find('h2').text().trim();
        
    //     expect( counterText ).toBe('11');
        
    // });

    // test('debe de decrementar con el boton -1', () => {
    //     const btn1 = wrapper.find('button').at(2).simulate('click');
    //     //console.log(btn1.html());
    //     const counterText = wrapper.find('h2').text().trim();
        
    //     expect( counterText ).toBe('9');
        
    // });

    // test('debe de colocar el valor por defecto con el btn reset', () => {

    //     const wrapper = shallow( <GifGridItem value = {105} /> );

    //     wrapper.find('button').at(0).simulate('click');
    //     wrapper.find('button').at(0).simulate('click');
    //     wrapper.find('button').at(1).simulate('click');
    //     //console.log(btn1.html());
    //     const counterText = wrapper.find('h2').text().trim();
        
    //     expect( counterText ).toBe('105');
        
    // })  
})
