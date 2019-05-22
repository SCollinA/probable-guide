import React from "react";

interface Props {
    addTodo?: (newTodo: string) => void;
}

export default (props: Props) => {
    return (
        <form className="TodoSearchAdd">
            <input type="text"/>
            <input type="submit"/>
        </form>
    );
};