import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

interface Props {
    todos?: string[];
    updateTodo: (oldTodo: string, newTodo: string) => boolean;
    removeTodo: (oldTodo?: string) => void;
}

export default ({ todos, updateTodo, removeTodo }: Props) => {
    console.log(todos);
    return (
        <List className="TodoList">
            {todos && todos.map((todo, index) => {
                console.log(todo);
                return (
                    <TodoItem
                        key={todo}
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                );
            })}
        </List>
    );
};
