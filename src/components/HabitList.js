import React from 'react';

class HabitCompleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onCompleteHabit(this.props.habitIndex);
    }
    render () {
        return (
            <button onClick={this.handleClick}>
                Remove Habit
            </button>
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
