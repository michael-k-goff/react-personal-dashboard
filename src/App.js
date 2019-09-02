import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Habits from './components/Habits';

// Import helper functions
import {initTodo, addTodo} from './todoHelper';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.change_screen = this.change_screen.bind(this);
        this.complete_todo = this.complete_todo.bind(this);
        this.add_todo = this.add_todo.bind(this);
        this.state = {
            currentScreen: "todo",
            todoList: initTodo()
        };
    }

    // Switch the main screen to another state, typically after a button on the dashboard
    change_screen(new_screen) {
        this.setState({currentScreen: new_screen});
    }

    // Mark a to-do item as done.
    complete_todo(todo_num) {
        const new_todo_list = this.state.todoList;
        new_todo_list.splice(todo_num,1);
        this.setState({todoList: new_todo_list});
    }

    // Add a new to-do item
    add_todo(desc, date) {
        this.setState({todoList: addTodo(desc, date, this.state.todoList)});
    }

    render() {
        let main_screen;
        if (this.state.currentScreen === "todo") {
            main_screen = <Todo
                todoList={this.state.todoList}
                onCompleteTodo={this.complete_todo}
                onAddTodo={this.add_todo}
            />
        }
        else if (this.state.currentScreen === "habits") {
            main_screen = <Habits />
        }
        return (
            <div className="App">
                <Dashboard onScreenChange={this.change_screen}/>
                {main_screen}
            </div>
        );
    }
}

export default App;
