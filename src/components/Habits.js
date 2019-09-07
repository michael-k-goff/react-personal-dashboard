// Habits component

import React from 'react';
import {StyledHabits,
        StyledHabitHeader,
        StyledHabitLeftColumn,
        StyledHabitBuffer} from './styles/StyledHabits';

// Import helpers
import HabitList from './HabitList';
import HabitForm from './HabitForm';
import HabitCheckIn from './HabitCheckIn';

const Habits = (props) => {
    return (
        <StyledHabits>
            <StyledHabitHeader>
                <h2>Habits</h2>
            </StyledHabitHeader>
            <StyledHabitLeftColumn>
                <HabitList
                    habitList={props.habitList}
                    onCompleteHabit={props.onCompleteHabit}
                    onUpdateHabit={props.onUpdateHabit}
                />
                <HabitForm onAddHabit={props.onAddHabit} />
            </StyledHabitLeftColumn>
            <StyledHabitBuffer>
            &nbsp;
            </StyledHabitBuffer>
            <HabitCheckIn
                habitList={props.habitList}
                onUpdateHabit={props.onUpdateHabit}
                habitUpdate={props.habitUpdate}
            />
        </StyledHabits>
    );
}

export default Habits;
