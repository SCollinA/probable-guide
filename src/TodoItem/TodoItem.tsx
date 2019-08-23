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
    mouseX: number;
    mouseY: number;
    setMouseLocation: (mouseX: number, mouseY: number) => void;
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
            mouseX: 0,
            mouseY: 0,
            setMouseLocation: (mouseX: number, mouseY: number) => this.setState({
                mouseX,
                mouseY
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
            isMoving,
            setIsMoving,
            mouseX,
            mouseY,
            setMouseLocation
        } = this.state;
        const {
            todo,
            updateTodo,
            removeTodo
        } = this.props;
        return (
            <ListItem
                className="TodoItem"
                style={isMoving ? {
                        position: "absolute",
                        top: mouseY && mouseY - 20,
                        left: mouseX && mouseX - 50,
                    } :
                    {}
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsEditing(!isEditing)}
                onMouseDown={() => setIsMoving(true)}
                onMouseUp={() => setIsMoving(false)}
                onMouseMove={(event) => isMoving && setMouseLocation(event.clientX, event.clientY)}
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