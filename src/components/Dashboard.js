// Dashboard component
// Includes subcomponents to the dashboard

import React from 'react';
import {StyledDashboard, StyledWelcome} from './styles/StyledDashboard';

const Welcome = (props) => {
    return (
        <StyledWelcome>
            Welcome, {props.name}.
        </StyledWelcome>
    );
}

const GeneralInfo = (props) => {
    const cur_date = new Date();
    const habit_date = props.habitUpdate;
    return (
        <div>
            <p>It is {cur_date.getMonth()+1}-{cur_date.getDate()}-{cur_date.getFullYear()}.</p>
            <p>Last check-in on habits: {habit_date.month}-{habit_date.day}-{habit_date.year}.</p>
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

const Dashboard = (props) => {
    return (
        <StyledDashboard>
            <Welcome name="User" />
            <GeneralInfo habitUpdate={props.habitUpdate} />
            <TodoButton onScreenChange={props.onScreenChange}/>
            <HabitButton onScreenChange={props.onScreenChange}/>
        </StyledDashboard>
    );
}

export default Dashboard;
