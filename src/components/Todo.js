// To-do list component

import React from 'react';
import {StyledTodo} from './styles/StyledTodo';

// Import helpers
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// Component for the whole todo page.
const Todo = (props) => {
    return (
        <StyledTodo>
            <h1>To-do list</h1>
            <TodoList todoList={props.todoList} onCompleteTodo={props.onCompleteTodo} />
            <TodoForm onAddTodo={props.onAddTodo} />
        </StyledTodo>
    );
}

export default Todo;
