import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

interface Props {
    todos?: string[];
    removeTodo?: (oldTodo?: string) => void;
}

export default ({ todos, removeTodo }: Props) => {
    return (
        <List className="TodoList">
            {todos && todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
};
