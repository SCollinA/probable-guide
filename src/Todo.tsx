import React from "react";
import "./Todo.css";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

interface Props {}
interface State {
  todos: string[];
  searchTerm: string;
  searchResults: string[];
  isSearching: boolean;
}

class Todo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
      searchTerm: "",
      searchResults: [],
      isSearching: false,
    };
  }

  updateSearchTerm = (searchTerm: string) => this.setState({
    searchTerm,
    searchResults: searchTerm.length > 0 ?
      this.state.todos.filter(todo => todo.includes(searchTerm)) :
      [],
    isSearching: searchTerm.length > 0,
  })

  addTodo = () => {
    const newTodo = this.state.searchTerm;
    if (!this.state.todos.includes(newTodo)) {
      this.setState({
        todos: [
            ...this.state.todos,
            newTodo
          ]
      }, () => this.updateSearchTerm(""));
    }
  }

  updateTodo = (oldTodo: string, newTodo: string) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo === oldTodo && !this.state.todos.includes(newTodo) ?
          newTodo :
          todo;
      }),
    }, () => console.log(this.state.todos));
  }

  removeTodo = (oldTodo?: string) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo !== oldTodo),
    });
  }

  render() {
    console.log(this.state.isSearching, this.state.searchResults, this.state.todos);
    return (
      <div className="Todo">
          <TodoSearchAdd
            addTodo={this.addTodo}
            updateSearchTerm={this.updateSearchTerm}
            searchTerm={this.state.searchTerm}
          />
          <TodoList
            todos={this.state.isSearching ?
              this.state.searchResults :
              this.state.todos}
            updateTodo={this.updateTodo}
            removeTodo={this.removeTodo}
          />
      </div>
    );
  }
}

export default Todo;