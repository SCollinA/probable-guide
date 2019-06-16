import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

interface Props {
    todos?: string[];
    updateTodo: (oldTodo: string, newTodo: string) => void;
    removeTodo: (oldTodo?: string) => void;
}

export default ({ todos, updateTodo, removeTodo }: Props) => {
    return (
        <List className="TodoList">
            {todos && todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </List>
    );
};
