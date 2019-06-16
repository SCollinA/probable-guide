import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
    addTodo?: () => void;
    updateSearchTerm?: (todoTerm: string) => void;
    searchTerm?: string;
}

export default ({ addTodo, updateSearchTerm, searchTerm }: Props) => {
    return (
        <form
            className="TodoSearchAdd"
            onSubmit={(event) => {
                event.preventDefault();
                addTodo && addTodo();
            }}
        >
            <TextField
                type="text"
                value={searchTerm}
                onChange={({ target: { value }}) => updateSearchTerm && updateSearchTerm(value)}
            />
            <Button type="submit">submit</Button>
        </form>
    );
};