import React from "react";
import ReactDOM from "react-dom";
import * as enzyme from "enzyme";
import App from "./App";
import TodoList from "./TodoList/TodoList";
import TodoSearchAdd from "./TodoSearchAdd/TodoSearchAdd";

describe("main App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has context with todos and todoTerm", () => {

  });

  it("renders TodoList component", () => {
    const app = enzyme.shallow(<App/>);
    expect(app.children(TodoList).exists()).toBe(true);
  });

  it("renders TodoSearchAdd component", () => {
    const app = enzyme.shallow(<App/>);
    expect(app.children(TodoSearchAdd).exists()).toBe(true);
  });
});


