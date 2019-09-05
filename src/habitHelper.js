// Helper functions for habits

import {todoCompare} from './todoHelper';

export const initHabits = () => {
    var arr = [
        {description:"Diet", year:2019, month:1, day:1},
        {description:"Exercise", year:2019, month:2, day:21},
        {description:"Work", year:2018, month:3, day:31},
        {description:"Sleep", year:2019, month:8, day:15}
    ];
    return arr.sort(todoCompare);
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
    habit["year"] = parseInt(date_components[0]);
    habit["month"] = parseInt(date_components[1]);
    habit["day"] = parseInt(date_components[2]);
    return habit;
}
