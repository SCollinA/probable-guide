import React from "react";

interface Props {
    addTodo?: (newTodo: string) => void;
    updateSearchTerm?: (todoTerm: string) => void;
    searchTerm?: string;
}

export default ({ addTodo, updateSearchTerm, searchTerm }: Props) => {
    return (
        <form className="TodoSearchAdd">
            <input type="text"/>
            <input type="submit"/>
        </form>
    );
};