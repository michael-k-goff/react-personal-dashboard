// Helper functions for habits

import {todoCompare} from './todoHelper';
import {saveData} from './helper';

export const initHabits = () => {
    var arr = [
        {description:"Sample Habit 1", year:2019, month:1, day:1},
        {description:"Sample Habit 2", year:2019, month:2, day:21}
    ];
    return ('habitList' in window.localStorage && saveData) ?
        JSON.parse(window.localStorage.getItem('habitList')) :
        arr.sort(todoCompare);
}

export const initHabitUpdate = () => {
    const cur_date = new Date();
    return ('habitDate' in window.localStorage && saveData) ?
        JSON.parse(window.localStorage.getItem('habitDate')) :
        {
            year:parseInt(cur_date.getFullYear()),
            month:parseInt(cur_date.getMonth()+1),
            day:parseInt(cur_date.getDate())
        };
}

export const habitUpdateToday = () => {
    const cur_date = new Date();
    return {
        year:parseInt(cur_date.getFullYear()),
        month:parseInt(cur_date.getMonth()+1),
        day:parseInt(cur_date.getDate())
    };
}

export const addHabit = (desc, habitList) => {
    const cur_date = new Date();
    habitList = habitList.concat(
        {
            description:desc,
            year:parseInt(cur_date.getFullYear()),
            month:parseInt(cur_date.getMonth()+1),
            day:parseInt(cur_date.getDate())
        }
    );
    return habitList.sort(todoCompare);
}

export const updateHabit = (habit,date) => {
    const date_components = date.split('-')
    if (parseInt(date_components[0]) < 2000) {
        return habit;
    }
    habit["year"] = parseInt(date_components[0]);
    habit["month"] = parseInt(date_components[1]);
    habit["day"] = parseInt(date_components[2]);
    return habit;
}
