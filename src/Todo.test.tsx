import React from "react";
import ReactDOM from "react-dom";
import * as enzyme from "enzyme";
import Todo from "./Todo";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";
import TodoContext from "./Context/TodoContext";

describe("main Todo component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("provides TodoContext", () => {
    const app: enzyme.ShallowWrapper = enzyme.shallow(<Todo/>);
    expect(app.children(TodoContext.Provider).exists()).toBe(true);
  });

  it("renders TodoList component", () => {
    const app: enzyme.ShallowWrapper = enzyme.shallow(<Todo/>);
    const todoContextProvider = app.children(TodoContext.Provider);
    expect(todoContextProvider.children(TodoList).exists()).toBe(true);
  });

  it("renders TodoSearchAdd component", () => {
    const app: enzyme.ShallowWrapper = enzyme.shallow(<Todo/>);
    const todoContextProvider = app.children(TodoContext.Provider);
    expect(todoContextProvider.children(TodoSearchAdd).exists()).toBe(true);
  });
});


