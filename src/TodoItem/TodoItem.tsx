import React from "react";
import { ListItem, ListItemText, TextField } from "@material-ui/core";
import "./TodoItem.css";

interface IProps {
    todo: string;
    updateTodo: (oldTodo: string, newTodo: string) => boolean;
    removeTodo: (oldTodo?: string) => void;
}

interface IState {
    todo: string;
    isHovered: boolean;
    setIsHovered: (isMousedOver: boolean) => void;
    isEditing: boolean;
    setIsEditing: (isEditing: boolean) => void;
    editTodo: (todo: string) => void;
    isMoving: boolean;
    setIsMoving: (isMoving: boolean) => void;
}

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            todo: this.props.todo,
            isHovered: false,
            setIsHovered: (isMousedOver: boolean) => this.setState({
                isHovered: isMousedOver,
            }),
            isEditing: false,
            setIsEditing: (isEditing: boolean) => {
                this.setState({
                    isEditing
                }, () => {
                    if (!this.state.isEditing) {
                        this.setState({
                            todo: this.props.todo,
                        });
                    }
                });
            },
            editTodo: (todo: string) => this.setState({
                todo
            }),
            isMoving: false,
            setIsMoving: (isMoving: boolean) => this.setState({
                isMoving
            }),
        };
    }

    render() {
        const {
            isHovered,
            setIsHovered,
            isEditing,
            setIsEditing,
            editTodo,
            //isMoving,
            setIsMoving
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
                onMouseDown={() => setIsMoving(true)}
                onMouseUp={() => setIsMoving(false)}
            >
                {isEditing ?
                    (<form
                        className="TodoItemForm"
                        onSubmit={(event) => {
                            event.preventDefault();
                            const updateSuccess = updateTodo(todo, this.state.todo);
                            setIsEditing(!updateSuccess);
                        }}
                    >
                        <TextField
                            name="todoName"
                            value={this.state.todo}
                            onChange={({ target: { value } }) => editTodo(value)}
                            autoFocus
                        />
                    </form>) :
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