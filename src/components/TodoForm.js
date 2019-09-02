// Form for adding a new todo item.

import React from 'react';
import {StyledTodo} from './styles/StyledTodo';

class TodoFormAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {desc:"What to do", date:null};
    }

    handleChangeDescription(event) {
        this.setState({desc: event.target.value});
    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit(event) {
        this.props.onAddTodo(this.state.desc, this.state.date);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.desc} onChange={this.handleChangeDescription} />
                <input type="date" onChange={this.handleChangeDate} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const TodoForm = (props) => {
    return (
        <div>
            <b>Add new task.</b>
            <TodoFormAddNew onAddTodo={props.onAddTodo} />
        </div>
    );
}

export default TodoForm;
