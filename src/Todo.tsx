import React, { Component } from "react";
import "./Todo.css";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

interface Props {}
interface State {
  todos: string[];
  searchTerm: string;
  searchResults: string[];
}

class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
      searchTerm: "",
      searchResults: [],
    };
  }

  updateSearchTerm = (searchTerm: string) => this.setState({
    searchTerm,
    searchResults: this.state.todos.filter(todo => todo.includes(searchTerm))
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
          <TodoSearchAdd
            addTodo={this.addTodo}
            updateSearchTerm={this.updateSearchTerm}
          />
          <TodoList
            todos={this.state.todos}
          />
      </div>
    );
  }
}

export default Todo;