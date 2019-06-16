import * as enzyme from "enzyme";
import React from "react";
import TodoItem from "./TodoItem";
import TodoList from "../TodoList/TodoList";
import Todo from "../Todo";
import { ListItem } from "@material-ui/core";

describe("TodoItem component", () => {
    it("renders without crashing", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        expect(todoItem.exists()).toBe(true);
    });

    it("is a ListItem", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        expect(todoItem.is(ListItem)).toBe(true);
    });

    it("renders the todo as an ListItemText", () => {
        const todoItem = enzyme.shallow(<TodoItem todo={"hello"}/>);
        expect(todoItem.find(ListItem).text()).toBe("hello");
    });

    it("shows remove as second child when todo is hovered", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        todoItem.simulate("mouseenter");
        expect(todoItem.childAt(1).text()).toBe("remove");
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
});