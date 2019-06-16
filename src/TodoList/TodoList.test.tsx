import React from "react";
import * as enzyme from "enzyme";
import Todo from "../Todo";
import TodoList from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

describe("TodoList component", () => {
    it("renders without crashing", () => {
        const todoList = enzyme.mount(<Todo/>).find(TodoList);
        expect(todoList.exists()).toBe(true);
    });

    it("is a List", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoList = todo.find("ul");
        expect(todoList.exists()).toBe(true);
    });

    it("has class of TodoList", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoList = todo.find("ul");
        expect(todoList.hasClass("TodoList")).toBe(true);
    });

    it("renders todos as TodoItem elements", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: [ "mow lawn" ] });
        const todoList = todo.find(TodoList);
        expect(todoList.find(TodoItem).exists()).toBe(true);
    });
});