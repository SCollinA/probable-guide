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

  it("has state with list of todos and todoTerm", () => {
    const todoList = enzyme.shallow(<Todo/>);
    expect(todoList.state("todos")).toEqual([]);
    expect(todoList.state("todoTerm")).toEqual("");
  });

  it("has a updateSearchTerm method", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    expect(todo.instance().updateSearchTerm).toBeDefined();
  });

  it("filters todos by todoTerm", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    const todoInstance = todo.instance();
    todoInstance.addTodo("go shopping");
    todoInstance.addTodo("mow lawn");
    todoInstance.updateSearchTerm("mow");
    expect(todoInstance.state.todos).toEqual(["mow lawn"]);
  });

  it("updates search term in state", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    todo.instance().updateSearchTerm("hello");
    expect(todo.state().todoTerm).toBe("hello");
  });

  it("has a addTodo method", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    expect(todo.instance().addTodo).toBeDefined();
  });

  it("adds a todo to state", () => {
    const todo = enzyme.shallow<Todo>(<Todo/>);
    todo.instance().addTodo("go shopping");
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

  it("passes todos from state to TodoList", () => {
    const todo = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoList).props()).toHaveProperty("todos");
  });
});


