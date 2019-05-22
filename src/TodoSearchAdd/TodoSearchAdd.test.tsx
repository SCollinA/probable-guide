import React from 'react';
import * as enzyme from 'enzyme';
import TodoSearchAdd from './TodoSearchAdd';

describe('TodoSearchAdd component', () => {
    it('renders without crashing', () => {
        const todoSearchAdd: enzyme.ShallowWrapper = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.exists()).toBe(true);
    });
    
    it('is a form', () => {
        const todoSearchAdd: enzyme.ShallowWrapper = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.is('form')).toBe(true);
    });
    
    it('has class TodoSearchAdd', () => {
        const todoSearchAdd: enzyme.ShallowWrapper = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.hasClass('TodoSearchAdd')).toBe(true);
    })

    it('has a text input', () => {
        const todoSearchAdd: enzyme.ShallowWrapper = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.children('input[type="text"]').exists()).toBe(true);
    });
    
    it('has a submit button', () => {
        const todoSearchAdd: enzyme.ShallowWrapper = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.children('input[type="submit"]').exists()).toBe(true);
    })
})