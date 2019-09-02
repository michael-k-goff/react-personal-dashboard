// This file contains various components related to the todo list.
// Not the form for adding a new item.

import React from 'react';
import {StyledTodo} from './styles/StyledTodo';

// Import helpers
import {blockTodo} from '../todoHelper';

// Component for the button that completes a todo item
class TodoCompleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onCompleteTodo(this.props.todoIndex);
    }
    render () {
        return (
            <button onClick={this.handleClick}>
                Done!
            </button>
        );
    }
}

// Component for a single todo litem
const TodoItem = (props) => {
    return (
        <div>
            <TodoCompleteButton
                onCompleteTodo={props.onCompleteTodo}
                todoIndex={props.todoIndex}
            />
            {props.todo.description}: {props.todo.month}-{props.todo.day}-{props.todo.year}
        </div>
    );
}

// Component for a todo list block
const TodoBlock = (props) => {
    const indexArray = Array.from(Array(props.todoList.length).keys())
    const listTodo = indexArray.map((index) =>
        <TodoItem
            todo={props.todoList[index]}
            todoIndex={props.todoIndices[index]}
            onCompleteTodo={props.onCompleteTodo}
            key={props.todoIndices[index].toString()}
        />
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
        <TodoBlock
            blockTitle={block[0]}
            todoList={block[1]}
            todoIndices={block[2]}
            onCompleteTodo={props.onCompleteTodo}
            key={index.toString()}
        />
    )
    return (
        <div>{listBlocks}</div>
    );
}

export default TodoList;
