import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import TodoSearchAdd from './TodoSearchAdd/TodoSearchAdd';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoSearchAdd/>
      <TodoList/>
    </div>
  );
}

export default App;
