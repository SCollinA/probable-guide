import React from "react";

interface Props {
    todos?: string[];
}

export default ({ todos }: Props) => {
    return (
        <div className="TodoList">
            {todos && todos.map((todo, index) => (
                <h4 key={index}>{todo}</h4>
            ))}
        </div>
    );
};
