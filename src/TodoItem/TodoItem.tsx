import React from "react";

interface IProps {
    todo?: string;
    removeTodo?: (oldTodo?: string) => void;
}

export default ({ todo, removeTodo }: IProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div
            className="TodoItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4>{todo}</h4>
            {isHovered &&
                <h4
                    onClick={() => removeTodo && removeTodo(todo)}
                >
                    x
                </h4>}
        </div>
    );
};