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

  it("renders TodoList component", () => {
    const todo: enzyme.ShallowWrapper = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoList).exists()).toBe(true);
  });

  it("renders TodoSearchAdd component", () => {
    const todo: enzyme.ShallowWrapper = enzyme.shallow(<Todo/>);
    expect(todo.children(TodoSearchAdd).exists()).toBe(true);
  });
});


