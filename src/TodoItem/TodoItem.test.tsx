import * as enzyme from "enzyme";
import React from "react";
import TodoItem from "./TodoItem";

describe("TodoItem component", () => {
    it("renders without crashing", () => {
        const todoItem = enzyme.shallow(<TodoItem/>);
        expect(todoItem.exists()).toBe(true);
    });
});