import React from "react";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
    todos?: string[];
}

export default ({ todos }: Props) => {
    return (
        <div className="TodoList">
            {todos && todos.map((todo, index) => (
                <TodoItem key={index} todo={todo}/>
            ))}
        </div>
    );
};
