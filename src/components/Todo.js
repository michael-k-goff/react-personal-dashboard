// To-do list component

import React from 'react';
import {StyledTodo, StyledTodoHeader} from './styles/StyledTodo';

// Import helpers
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// Component for the whole todo page.
const Todo = (props) => {
    return (
        <StyledTodo>
            <StyledTodoHeader>
                <h2>To-do list</h2>
            </StyledTodoHeader>
            <div>
                <TodoList todoList={props.todoList} onCompleteTodo={props.onCompleteTodo} />
                <TodoForm onAddTodo={props.onAddTodo} />
            </div>
        </StyledTodo>
    );
}

export default Todo;
