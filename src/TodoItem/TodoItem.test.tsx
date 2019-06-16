import * as enzyme from "enzyme";
import React from "react";
import TodoItem from "./TodoItem";
import TodoList from "../TodoList/TodoList";
import Todo from "../Todo";
import { ListItem, TextField, ListItemText } from "@material-ui/core";
import { toUnicode } from "punycode";

describe("TodoItem component", () => {
    it("renders without crashing", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        expect(todoItem.exists()).toBe(true);
    });

    it("is a ListItem", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find("li");
        expect(todoItem.exists()).toBe(true);
    });

    it("renders the todo as an ListItemText", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find("li");
        expect(todoItem.text()).toBe("hello");
    });

    it("shows remove as second child when todo is hovered", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        todoItem.simulate("mouseenter");
        expect(todoItem.childAt(0).text()).toContain("remove");
    });

    it("shows remove as second child when todo is editing", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        todoItem.setState({ isEditing: true });
        expect(todoItem.childAt(0).text()).toContain("remove");
    });

    it("removes todo when remove is clicked", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({
            todos: ["hello"]
        });
        const todoItem = todo.find("li.TodoItem");
        todoItem.simulate("mouseenter");
        const todoX = todo.find("li.TodoItem").childAt(1);
        todoX.simulate("click");
        expect(todoItem.prop("todo")).not.toBeDefined();
    });

    it("has a isEditing state default is false", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        expect(todoItem.state("isEditing")).toBe(false);
    });

    it("renders todo as text input when editing", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        todoItem.simulate("click");
        expect(todo.find(TextField).at(1).exists()).toBe(true);
    });

    it("does not render list item text if editing", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        todoItem.simulate("click");
        expect(todo.find(ListItemText).text()).not.toBe("hello");
    });

    it("updates todo name and stops editing when text input form submitted", () => {
        const todo = enzyme.mount(<Todo/>);
        todo.setState({ todos: ["hello"] });
        const todoItem = todo.find(TodoItem);
        todoItem.simulate("click");
        const textField = todo.find(TextField).at(1);
        textField.simulate("change", "goodbye");
        textField.simulate("submit");
        expect(todoItem.state("isEditing")).toBe(false);
    });
});