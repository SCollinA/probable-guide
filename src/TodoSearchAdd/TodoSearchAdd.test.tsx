import React from "react";
import * as enzyme from "enzyme";
import Todo from "../Todo";
import TodoSearchAdd from "./TodoSearchAdd";

describe("TodoSearchAdd component", () => {
    it("renders without crashing", () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.exists()).toBe(true);
    });

    it("is a form", () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.is("form")).toBe(true);
    });

    it("has class TodoSearchAdd", () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.hasClass("TodoSearchAdd")).toBe(true);
    });

    it("has a text input", () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.children('input[type="text"]').exists()).toBe(true);
    });

    it("has a submit button", () => {
        const todoSearchAdd = enzyme.shallow(<TodoSearchAdd/>);
        expect(todoSearchAdd.children('input[type="submit"]').exists()).toBe(true);
    });

    it("receives searchTerm as text input value", () => {
        const todo = enzyme.mount<Todo>(<Todo/>);
        const todoSearchAdd = todo.find(TodoSearchAdd);
        // cannot check except against initial state without onChange function
        expect(todoSearchAdd.find('input[type="text"]').prop("value")).toBe(todo.state().searchTerm);
    });

    it("updates search term on change", () => {
        const todo = enzyme.mount<Todo>(<Todo/>);
        const todoSearchAdd = todo.find(TodoSearchAdd);
        const textInput = todoSearchAdd.find('input[type="text"]');
        textInput.simulate("change", { target: { value: "hello" }});
        expect(todo.state().searchTerm).toBe("hello");
    });

    it("adds a todo on submit", () => {
        const todo = enzyme.mount<Todo>(<Todo/>);
        const todoSearchAdd = todo.find(TodoSearchAdd);
        const textInput = todoSearchAdd.find('input[type="text"]');
        textInput.simulate("change", { target: { value: "hello" }});
        todoSearchAdd.simulate("submit");
        expect(todo.state().todos).toContain("hello");
    });
});