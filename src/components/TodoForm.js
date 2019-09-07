// Form for adding a new todo item.

import React from 'react';
import {StyledTodoForm, StyledTodoFormHeader} from './styles/StyledTodo';

class TodoFormAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {desc:"", date:null};
    }

    handleChangeDescription(event) {
        event.preventDefault();
        this.setState({desc: event.target.value});
    }

    handleChangeDate(event) {
        event.preventDefault();
        this.setState({date: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.date) {
            this.props.onAddTodo(this.state.desc, this.state.date);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Task Description
                <input type="text" className="description" value={this.state.desc} onChange={this.handleChangeDescription} />
                <br />
                <br />
                Due Date
                <br />
                <input type="date" className="datebox" onChange={this.handleChangeDate} />
                <br />
                <br />
                <input type="submit" className="taskSubmit" value="Add New Task" />
            </form>
        );
    }
}

const TodoForm = (props) => {
    return (
        <StyledTodoForm>
            <StyledTodoFormHeader>
                Add New Task
            </StyledTodoFormHeader>
            <TodoFormAddNew onAddTodo={props.onAddTodo} />
        </StyledTodoForm>
    );
}

export default TodoForm;
