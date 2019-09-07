import React from 'react';

// Stylized components
import {StyledHabit,
        StyledHabitList,
        StyledHabitCompleteButton} from './styles/StyledHabits';

//Helpers
import {formatDate} from '../helper';

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
            <div className="habitComplete">
                <StyledHabitCompleteButton onClick={this.handleClick}>
                    Remove Habit
                </StyledHabitCompleteButton>
            </div>
        );
    }
}

const Habit = (props) => {
    return (
        <StyledHabit>
            <div className="habitDescription">{props.habit.description}</div>
            <div className="habitDate">Since {formatDate(props.habit)}</div>
            <HabitCompleteButton
                onCompleteHabit={props.onCompleteHabit}
                habitIndex={props.habitIndex}
            />
        </StyledHabit>
    );
}

const HabitList = (props) => {
    const habitList = props.habitList.map((habit,index) =>
        <Habit
            key={index}
            onCompleteHabit={props.onCompleteHabit}
            habitIndex={index}
            habit={habit}
        />
    );
    return (
        <StyledHabitList>
            {habitList}
        </StyledHabitList>
    );
}

export default HabitList;
