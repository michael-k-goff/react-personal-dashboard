import React from 'react';
import './App.css';

// Import components
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Habits from './components/Habits';
import Settings from './components/Settings';

// Import helper functions
import {initTodo, addTodo} from './todoHelper';
import {initHabits, initHabitUpdate, addHabit, updateHabit} from './habitHelper';
import {initName} from './helper';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.change_screen = this.change_screen.bind(this);
        this.complete_todo = this.complete_todo.bind(this);
        this.add_todo = this.add_todo.bind(this);
        this.complete_habit = this.complete_habit.bind(this);
        this.add_habit = this.add_habit.bind(this);
        this.update_habit = this.update_habit.bind(this);
        this.change_name = this.change_name.bind(this);
        this.state = {
            currentScreen: "todo",
            todoList: initTodo(),
            habitList: initHabits(),
            habitDate: initHabitUpdate(),
            userName: initName()
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

    // Mark a habit as done.
    complete_habit(habit_num) {
        const new_habit_list = this.state.habitList;
        new_habit_list.splice(habit_num,1);
        this.setState({habitList: new_habit_list});
    }

    // Update a habit by changing its date
    update_habit(habit_num, date) {
        const habit_list = this.state.habitList
        habit_list[habit_num] = updateHabit(habit_list[habit_num], date);
        this.setState({habitList: habit_list});
    }

    // Add a new habit
    add_habit(desc) {
        this.setState({habitList: addHabit(desc, this.state.habitList)});
    }

    // Change name
    change_name(new_name) {
        this.setState({userName: new_name});
    }

    render() {
        // Save data locally
        window.localStorage.setItem('todoList',JSON.stringify(this.state.todoList));
        window.localStorage.setItem('habitList',JSON.stringify(this.state.habitList));
        window.localStorage.setItem('habitDate',JSON.stringify(this.state.habitDate));
        window.localStorage.setItem('userName',this.state.userName);

        let main_screen;
        if (this.state.currentScreen === "todo") {
            main_screen = <Todo
                todoList={this.state.todoList}
                onCompleteTodo={this.complete_todo}
                onAddTodo={this.add_todo}
            />
        }
        else if (this.state.currentScreen === "habits") {
            main_screen = <Habits
                habitList={this.state.habitList}
                onCompleteHabit={this.complete_habit}
                onAddHabit={this.add_habit}
                onUpdateHabit={this.update_habit}
                habitUpdate={this.state.habitDate}
            />
        }
        else if (this.state.currentScreen === "settings") {
            main_screen = <Settings
                onChangeName = {this.change_name}
                name = {this.state.userName}
            />
        }
        return (
            <div className="App">
                <Dashboard
                    onScreenChange={this.change_screen}
                    habitUpdate={this.state.habitDate}
                    todoList={this.state.todoList}
                    userName={this.state.userName}
                />
                {main_screen}
            </div>
        );
    }
}

export default App;
