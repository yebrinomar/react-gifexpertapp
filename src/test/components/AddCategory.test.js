import React from 'react';
import {shallow} from 'enzyme';
import {AddCategory} from '../../components/AddCategory'

describe('Prueba en el <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('debe de mostrar <AddCategory /> correctamente', () => {
 
        expect(wrapper).toMatchSnapshot();
    
    });

    
    test('debe de cambiar la caja de texto', () => {
 
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {  value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    
    });

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){ } });     
        expect( setCategories ).not.toHaveBeenCalled();
        
    }); 

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        // 1. Simular el inputChange
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: {  value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();  
        expect( setCategories ).toHaveBeenCalledTimes(1);  
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function)); 

        // 4. el valor del input debe estar en ''
        expect(wrapper.find('input').prop('value')).toBe('');
        
    }); 
})
