import React from "react";
import "./Todo.css";
import TodoContext from "./Context/TodoContext";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
        <TodoContext.Provider value={{}}>
            <TodoSearchAdd/>
            <TodoList/>
        </TodoContext.Provider>
      </div>
    );
  }
};

export default Todo;
