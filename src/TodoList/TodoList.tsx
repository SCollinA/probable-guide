import React from 'react';

interface Props {}
interface State {
    todos: string[];
}

export default class TodoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <div className='TodoList'>

            </div>
        );
    }
};
