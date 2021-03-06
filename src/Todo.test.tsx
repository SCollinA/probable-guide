import React from "react";
import ReactDOM from "react-dom";
import * as enzyme from "enzyme";
import Todo from "./Todo";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

describe("main Todo component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has state", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.state()).toBeDefined();
  });

  it("has state with list of todos and searchTerm and searchResults", () => {
    const todoList = enzyme.shallow(<Todo/>);
    expect(todoList.state("todos")).toEqual([]);
    expect(todoList.state("searchTerm")).toEqual("");
    expect(todoList.state("searchResults")).toEqual([]);
  });

  it("has a updateSearchTerm method", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    expect(todo.instance().updateSearchTerm).toBeDefined();
  });

  it("filters todos by searchTerm for search results", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("go shopping");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("mow");
    expect(todoInstance.state.searchResults).toEqual(["mow lawn"]);
  });

  it("updates search term in state", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    todo.instance().updateSearchTerm("hello");
    expect(todo.state().searchTerm).toBe("hello");
  });

  it("has a addTodo method", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    expect(todo.instance().addTodo).toBeDefined();
  });

  it("adds a todo to state", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    todo.instance().updateSearchTerm("go shopping");
    todo.instance().addTodo();
    expect(todo.state().todos).toContain("go shopping");
  });

  it("renders TodoList component", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoList).exists()).toBe(true);
  });

  it("renders TodoSearchAdd component", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoSearchAdd).exists()).toBe(true);
  });

  it("passes addTodo to TodoSearchAdd component", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoSearchAdd).props()).toHaveProperty("addTodo");
  });

  it("passes updateSearchTerm to TodoSearchAdd component", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoSearchAdd).props()).toHaveProperty("updateSearchTerm");
  });

  it("passes searchTerm to TodoSearchAdd", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoSearchAdd).props()).toHaveProperty("searchTerm");
  });

  it("passes todos from state to TodoList", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoList).props()).toHaveProperty("todos");
  });

  it("passes searchResults from state to TodoList when searching", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("go shopping");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("mow");
    expect(todo.children(TodoList).props().todos).toContain("mow lawn");
    expect(todo.children(TodoList).props().todos).not.toContain("go shopping");
  });

  it("does not add a todo to state if it already exists", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("go shopping");
    todoInstance.addTodo();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    expect(todo.state().todos.length).toBe(2);
  });

  it("resets search term when todo added", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    expect(todo.state().searchTerm).toBe("");
  });

  it("does not contain search results if no search term present", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    expect(todo.state().searchResults.length).toBe(0);
  });

  it("resets search results after adding todo", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.updateSearchTerm("mow lawn");
    todoInstance.addTodo();
    expect(todo.state().searchResults.length).toBe(0);
  });

  it("has a updateTodo method", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    expect(todo.instance().updateTodo).toBeDefined();
  });

  it("updates a todo in state", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    todo.setState({ todos: [ "hello" ] });
    todo.instance().updateTodo("hello", "goodbye");
    expect(todo.state("todos")).toContain("goodbye");
  });
});


