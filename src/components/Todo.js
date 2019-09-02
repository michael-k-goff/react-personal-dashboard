// To-do list component

import React from 'react';
import {StyledTodo} from './styles/StyledTodo';

// Import helpers
import {blockTodo} from '../todoHelper';

// Component for a single todo litem
const TodoItem = (props) => {
    return (
        <div>
            <button>
                Done!
            </button>
            {props.todo.description}: {props.todo.month}-{props.todo.day}-{props.todo.year}
        </div>
    );
}

// Component for a todo list block
const TodoBlock = (props) => {
    const indexArray = Array.from(Array(props.todoList.length).keys())
    const listTodo = indexArray.map((index) =>
        <TodoItem todo={props.todoList[index]} todoIndex={props.todoIndices[index]} key={props.todoIndices[index].toString()} />
    )
    return (
        <div>
            <div>
                <b>
                    {props.blockTitle}
                </b>
            </div>
            <div>
                {listTodo}
            </div>
        </div>
    );
}

// Component for the todo list
const TodoList = (props) => {
    const blocks = blockTodo(props.todoList);
    const listBlocks = blocks.map((block, index) =>
        <TodoBlock blockTitle={block[0]} todoList={block[1]} todoIndices={block[2]} key={index.toString()} />
    )
    return (
        <div>{listBlocks}</div>
    );
}

// Component for the whole todo page.
const Todo = (props) => {
    return (
        <StyledTodo>
            <h1>To-do list</h1>
            <TodoList todoList={props.todoList} />
        </StyledTodo>
    );
}

export default Todo;
