import React from "react";
import * as enzyme from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";

describe("TodoList component", () => {
    it("renders without crashing", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.exists()).toBe(true);
    });

    it("is a div", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.is("div")).toBe(true);
    });

    it("has class of TodoList", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.hasClass("TodoList")).toBe(true);
    });

    it("renders todos as h4 elements", () => {
        const todoList = enzyme.shallow(<TodoList todos={["mow lawn"]}/>);
        expect(todoList.childAt(0).is(TodoItem)).toBe(true);
    });
});