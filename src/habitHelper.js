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
