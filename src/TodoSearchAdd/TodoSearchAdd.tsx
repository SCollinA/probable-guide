import React from "react";

interface Props {
    addTodo?: (newTodo: string) => void;
    updateSearchTerm?: (todoTerm: string) => void;
    searchTerm?: string;
}

export default ({ addTodo, updateSearchTerm, searchTerm }: Props) => {
    return (
        <form className="TodoSearchAdd">
            <input
                type="text"
                value={searchTerm}
                onChange={({ target: { value }}) => updateSearchTerm && updateSearchTerm(value)}
            />
            <input type="submit"/>
        </form>
    );
};