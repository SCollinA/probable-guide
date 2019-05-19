import React from 'react';
import * as enzyme from 'enzyme';
import TodoSearchAdd from './TodoSearchAdd';

describe('TodoSearchAdd component', () => {
    it('renders without crashing', () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.exists()).toBe(true);
    })
})