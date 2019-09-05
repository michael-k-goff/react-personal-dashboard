import React from 'react';

class HabitCompleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onCompleteHabit(this.props.habitIndex);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Remove Habit
            </button>
        );
    }
}

class HabitUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }
    componentDidMount() {
        this.setState({date:"2019-01-01"});
    }
    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }
    handleUpdate(event) {
        event.preventDefault();
        this.props.onUpdateHabit(this.props.habit_num, this.state.date);
    }
    render() {
        return (
            <form onSubmit={this.handleUpdate}>
                <input type="date" onChange={this.handleChangeDate} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const HabitList = (props) => {
    const habitList = props.habitList.map((habit,index) =>
        <div key={index}>
            <HabitCompleteButton onCompleteHabit={props.onCompleteHabit} habitIndex={index} />
            {habit.description}: Maintained since {habit.month}-{habit.day}-{habit.year}
        </div>
    );
    return (
        <div>{habitList}</div>
    );
}

export default HabitList;
