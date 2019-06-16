import React from "react";
import * as enzyme from "enzyme";
import TodoList from "./TodoList";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

describe("TodoList component", () => {
    it("renders without crashing", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.exists()).toBe(true);
    });

    it("is a List", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.is(List)).toBe(true);
    });

    it("has class of TodoList", () => {
        const todoList = enzyme.shallow(<TodoList/>);
        expect(todoList.hasClass("TodoList")).toBe(true);
    });

    it("renders todos as TodoItem elements", () => {
        const todoList = enzyme.shallow(<TodoList todos={["mow lawn"]}/>);
        expect(todoList.childAt(0).is(TodoItem)).toBe(true);
    });
});