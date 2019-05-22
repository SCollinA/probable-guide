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
    searchResults: searchTerm.length > 0 ?
      this.state.todos.filter(todo => todo.includes(searchTerm)) :
      []
  });

  addTodo = (newTodo: string) => {
    if (!this.state.todos.includes(newTodo)) {
      this.setState({
        todos: [
            ...this.state.todos,
            newTodo
          ]
      }, () => this.updateSearchTerm(""));
    }
  }

  render() {
    const isSearching: boolean = this.state.searchTerm.length > 0;
    return (
      <div className="Todo">
          <TodoSearchAdd
            addTodo={this.addTodo}
            updateSearchTerm={this.updateSearchTerm}
            searchTerm={this.state.searchTerm}
          />
          <TodoList
            todos={isSearching ?
              this.state.searchResults :
              this.state.todos}
          />
      </div>
    );
  }
}

export default Todo;