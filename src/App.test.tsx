import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';

describe('main App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders TodoList component', () => {
    const app = enzyme.shallow(<App/>);
    expect(app.children('TodoList').exists()).toBe(true);
  })
  
});


