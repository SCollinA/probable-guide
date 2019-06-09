import React from "react";

interface IProps {
    todo: string;
}

export default ({ todo }: IProps) => {
    return (
        <h4>{todo}</h4>
    );
};