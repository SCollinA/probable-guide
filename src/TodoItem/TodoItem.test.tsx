import * as enzyme from "enzyme";
import React from "react";
import TodoItem from "./TodoItem";
import TodoList from "../TodoList/TodoList";
import Todo from "../Todo";

describe("TodoItem component", () => {
    it("renders without crashing", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        expect(todoItem.exists()).toBe(true);
    });

    it("renders the todo as an h4", () => {
        const todoItem = enzyme.shallow(<TodoItem todo={"hello"}/>);
        expect(todoItem.find("h4").text()).toBe("hello");
    });

    it("shows an x as second child when todo is hovered", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        todoItem.simulate("mouseenter");
        expect(todoItem.childAt(1).text()).toBe("x");
    });

    it("removes todo when x is clicked", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({
            todos: ["hello"]
        });
        const todoItem = todo.find("div.TodoItem");
        console.log(todoItem);
        todoItem.simulate("mouseenter");
        const todoX = todo.find("div.TodoItem").childAt(1);
        todoX.simulate("click");
        expect(todoItem.prop("todo")).not.toBeDefined();
    });
});