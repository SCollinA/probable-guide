import React from 'react';
import * as enzyme from 'enzyme';
import TodoList from './TodoList';

describe('TodoList component', () => {
    it('renders without crashing', () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.exists()).toBe(true);
    })
})