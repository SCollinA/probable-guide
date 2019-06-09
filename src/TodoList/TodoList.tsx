import React from "react";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
    todos?: string[];
    removeTodo?: (oldTodo?: string) => void;
}

export default ({ todos, removeTodo }: Props) => {
    return (
        <div className="TodoList">
            {todos && todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};
