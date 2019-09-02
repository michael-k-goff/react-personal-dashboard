// Habits component

import React from 'react';
import {StyledHabits} from './styles/StyledHabits';

// Import helpers
import HabitList from './HabitList';
import HabitForm from './HabitForm';

const Habits = (props) => {
    return (
        <StyledHabits>
            <h1>Habits</h1>
            <HabitList habitList={props.habitList} onCompleteHabit={props.onCompleteHabit} />
            <HabitForm />
        </StyledHabits>
    );
}

export default Habits;
