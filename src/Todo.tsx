import React from "react";
import "./Todo.css";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
          <TodoSearchAdd/>
          <TodoList/>
      </div>
    );
  }
};

export default Todo;
