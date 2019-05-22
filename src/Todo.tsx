import React, { Component } from "react";
import "./Todo.css";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

interface Props {}
interface State {
  todos: string[];
  todoTerm: string;
}

class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
      todoTerm: "",
    };
  }

  updateSearchTerm = (todoTerm: string) => this.setState({
    todoTerm
  });

  addTodo = (newTodo: string) => this.setState({
    todos: [
      ...this.state.todos,
      newTodo
    ]
  });

  render() {
    return (
      <div className="Todo">
          <TodoSearchAdd/>
          <TodoList/>
      </div>
    );
  }
}

export default Todo;
