// Dashboard component
// Includes subcomponents to the dashboard

import React from 'react';
import {StyledDashboard, StyledWelcome} from './styles/StyledDashboard';
import {shortMessage} from '../todoHelper';
import {formatDate} from '../helper';

const Welcome = (props) => {
    return (
        <StyledWelcome>
            Welcome, {props.name}.
        </StyledWelcome>
    );
}

const GeneralInfo = (props) => {
    const cur_date = new Date();
    const cur_date_object = {
        "month":cur_date.getMonth()+1,
        "day":cur_date.getDate(),
        "year":cur_date.getFullYear()
    };
    const habit_date = props.habitUpdate;
    return (
        <div>
            <p>It is {formatDate(cur_date_object)}.</p>
            <p>{shortMessage(props.todoList)}</p>
            <p>Last check-in on habits: {formatDate(habit_date)}.</p>
        </div>
    );
}

class TodoButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onScreenChange("todo");
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                To-do List
            </button>
        );
    }
}

class HabitButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onScreenChange("habits");
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Habits
            </button>
        );
    }
}

class SettingButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onScreenChange("settings");
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Settings
            </button>
        );
    }
}

const Dashboard = (props) => {
    return (
        <StyledDashboard>
            <Welcome name={props.userName} />
            <GeneralInfo
                habitUpdate={props.habitUpdate}
                todoList={props.todoList}
            />
            <TodoButton onScreenChange={props.onScreenChange}/>
            <HabitButton onScreenChange={props.onScreenChange}/>
            <SettingButton onScreenChange={props.onScreenChange}/>
        </StyledDashboard>
    );
}

export default Dashboard;
