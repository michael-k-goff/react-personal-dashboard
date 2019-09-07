// Habits component

import React from 'react';
import {StyledHabits} from './styles/StyledHabits';

// Import helpers
import HabitList from './HabitList';
import HabitForm from './HabitForm';
import HabitCheckIn from './HabitCheckIn';

const Habits = (props) => {
    return (
        <StyledHabits>
            <h2>Habits</h2>
            <HabitList
                habitList={props.habitList}
                onCompleteHabit={props.onCompleteHabit}
                onUpdateHabit={props.onUpdateHabit}
            />
            <br />
            <HabitForm onAddHabit={props.onAddHabit} />
            <br />
            <HabitCheckIn
                habitList={props.habitList}
                onUpdateHabit={props.onUpdateHabit}
                habitUpdate={props.habitUpdate}
            />
        </StyledHabits>
    );
}

export default Habits;
