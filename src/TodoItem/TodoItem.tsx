import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

interface IProps {
    todo?: string;
    removeTodo?: (oldTodo?: string) => void;
}

export default ({ todo, removeTodo }: IProps) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <ListItem
            className="TodoItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ListItemText>{todo}</ListItemText>
            {isHovered &&
                <ListItemText
                    onClick={() => removeTodo && removeTodo(todo)}
                >
                    remove
                </ListItemText>}
        </ListItem>
    );
};