import React from "react";
import { ListItem, ListItemText, TextField } from "@material-ui/core";

interface IProps {
    todo: string;
    updateTodo: (oldTodo: string, newTodo: string) => void;
    removeTodo: (oldTodo?: string) => void;
}

interface IState {
    isHovered: boolean;
    setIsHovered: (isMousedOver: boolean) => void;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isHovered: false,
            setIsHovered: (isMousedOver: boolean) => this.setState({
                isHovered: isMousedOver,
            }),
            isEditing: false,
            setIsEditing: (isEditing: boolean) => this.setState({
                isEditing
            }),
        };
    }

    render() {
        const {
            isHovered,
            setIsHovered,
            isEditing,
            setIsEditing
        } = this.state;
        const {
            todo,
            updateTodo,
            removeTodo
        } = this.props;
        return (
            <ListItem
                className="TodoItem"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsEditing(!isEditing)}
            >
                {isEditing ?
                    <TextField
                        value={todo}
                        onChange={({ target: { value } }) => updateTodo(todo, value)}
                    /> :
                    <ListItemText>{todo}</ListItemText>
                }
                {(isHovered || isEditing) &&
                    <ListItemText
                        className="removeButton"
                        onClick={() => removeTodo(todo)}
                    >
                        remove
                    </ListItemText>}
            </ListItem>
        );
    }
}