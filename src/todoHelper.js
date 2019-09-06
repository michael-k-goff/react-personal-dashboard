// Some helper functions that manage the to-do list.

import {saveData} from './helper';

// The format for storing a single to-do item is as follows.
// {description: "...", "year":yyyy,"month":mm,"day":dd}
// Date fields may be blank, in which case the item has an indefinite due date.

// The full todo list is a regular list of single items.

// Will eventually be initialized to be empty, but for now some test values
export const initTodo = () => {
    var arr = [
        {description:"Today 1", year:2019, month:9, day:5},
        {description:"Today 2", year:2019, month:9, day:5},
        {description:"Tomorrow 1", year:2019, month:9, day:6},
        {description:"Tomorrow 2", year:2019, month:9, day:6},
        {description:"This Week 1", year:2019, month:9, day:8},
        {description:"This Week 2", year:2019, month:9, day:9},
        {description:"This Month 1", year:2019, month:9, day:20},
        {description:"This Month 2", year:2019, month:9, day:19},
        {description:"This Year 1", year:2019, month:11, day:20},
        {description:"This Year 2", year:2020, month:4, day:19},
        {description:"Future 1", year:2020, month:12, day:20},
        {description:"Future 2", year:2021, month:9, day:19},
        {description:"Late Task 1", year:2019, month:8, day:15},
        {description:"Late Task 2", year:2019, month:8, day:16},
        {description:"Late Task 3", year:2019, month:8, day:14}
    ];
    return ('todoList' in window.localStorage && saveData) ?
        JSON.parse(window.localStorage.getItem('todoList')) :
        arr.sort(todoCompare);
}

// Take a single todo list and return it blocked out into date groups
export const blockTodo = (todoList) => {
    const cur_date = new Date();
    const cur_date_todo = {
        "description":"",
        "year":cur_date.getFullYear(),
        "month":cur_date.getMonth()+1,
        "day":cur_date.getDate()
    }
    var [overdue, overdue_index] = [[],[]];
    var [today, today_index] = [[], []];
    var [tomorrow, tomorrow_index] = [[], []];
    var [week, week_index] = [[], []];
    var [month, month_index] = [[], []];
    var [year, year_index] = [[], []];
    var [future, future_index] = [[],[]];
    for (var i=0; i<todoList.length; i++) {
        if (todoCompare(todoList[i], cur_date_todo) < 0) {
            overdue = overdue.concat(todoList[i]);
            overdue_index = overdue_index.concat(i);
        }
        else if (todoCompare(todoList[i], advance_days(cur_date_todo,1)) < 0) {
            today = today.concat(todoList[i]);
            today_index = today_index.concat(i);
        }
        else if (todoCompare(todoList[i], advance_days(cur_date_todo,2)) < 0) {
            tomorrow = tomorrow.concat(todoList[i]);
            tomorrow_index = tomorrow_index.concat(i);
        }
        else if (todoCompare(todoList[i], advance_days(cur_date_todo,7)) < 0) {
            week = week.concat(todoList[i]);
            week_index = week_index.concat(i);
        }
        else if (todoCompare(todoList[i], advance_months(cur_date_todo,1)) < 0) {
            month = month.concat(todoList[i]);
            month_index = month_index.concat(i);
        }
        else if (todoCompare(todoList[i], advance_years(cur_date_todo,1)) < 0) {
            year = year.concat(todoList[i]);
            year_index = year_index.concat(i);
        }
        else {
            future = future.concat(todoList[i]);
            future_index = future_index.concat(i);
        }
    }
    var result = []
    if (overdue.length > 0) {
        result = result.concat([["Overdue", overdue, overdue_index]]);
    }
    if (today.length > 0) {
        result = result.concat([["Today", today, today_index]]);
    }
    if (tomorrow.length > 0) {
        result = result.concat([["Tomorrow", tomorrow, tomorrow_index]]);
    }
    if (week.length > 0) {
        result = result.concat([["This Week", week, week_index]]);
    }
    if (month.length > 0) {
        result = result.concat([["This Month", month, month_index]]);
    }
    if (year.length > 0) {
        result = result.concat([["This Year", year, year_index]]);
    }
    if (future.length > 0) {
        result = result.concat([["Future", future, future_index]]);
    }
    return result;
}

export const shortMessage = (todoList) => {
    const blocks = blockTodo(todoList);
    if (blocks.length == 0) {
        return "You have nothing to do.";
    }
    const num = blocks[0][1].length;
    const message = {
        "Overdue":"that are late",
        "Today":"today",
        "Tomorrow":"tomorrow",
        "This Week":"this week",
        "This Month":"this month",
        "This Year":"this year",
        "Future":"in the future"
    }[blocks[0][0]];
    return `You have ${num} thing${num==1?"":"s"} to do ${message}.`;
}

// Add a new todo to the list.
export const addTodo = (desc, date, todoList) => {
    var [year, month, day] = date.split('-');
    todoList = todoList.concat(
        {
            description:desc,
            year:parseInt(year),
            month:parseInt(month),
            day:parseInt(day)
        }
    );
    return todoList.sort(todoCompare);
}

// Determine which date is later in time.
export const todoCompare = (todoA, todoB) => {
    if (todoA.year < todoB.year) {return -1;}
    if (todoA.year > todoB.year) {return 1;}
    if (todoA.month < todoB.month) {return -1;}
    if (todoA.month > todoB.month) {return 1;}
    if (todoA.day < todoB.day) {return -1;}
    if (todoA.day > todoB.day) {return 1;}
    if (todoA.description < todoB.description) {return -1;}
    if (todoA.description > todoB.description) {return 1;}
}

// Number of days in a month.
const num_days_month = (todo) => {
    if (todo["month"] == 2) {
        if (todo["year"]%400 == 0 || (todo["year"]%100 != 0 && todo["year"]%4==0)) {
            return 29;
        }
        else {
            return 28;
        }
    }
    return [31,28,31,30,31,30,31,31,30,31,30,31][todo["month"]-1];
}

// Some helpers that advanced a date by a number of days, months, or years
// num_days is the number of days to advanced by. Should not be too large,
// e.g. not in the thousands or more.
// For large advances into the future, use advance_months or advance_years
const advance_days = (todo, num_days) => {
    var new_todo = {
        year: todo["year"],
        month: todo["month"],
        day: todo["day"] + num_days
    }
    while (new_todo["day"] > num_days_month(new_todo)) {
        new_todo["day"] -= num_days_month(new_todo);
        new_todo["month"] += 1;
        if (new_todo["month"] > 12) {
            new_todo["month"] = 1;
            new_todo["year"] += 1;
        }
    }
    return new_todo;
}

const advance_months = (todo, num_months) => {
    var new_todo = {
        year: todo["year"],
        month: todo["month"] + num_months,
        day: todo["day"]
    }
    const num_years = parseInt( (new_todo["month"]-1)/12 );
    new_todo["month"] -= num_years*12;
    new_todo["year"] += num_years;
    return new_todo;
}

const advance_years = (todo, num_years) => {
    return {
        year: todo["year"] + num_years,
        month: todo["month"],
        day: todo["day"]
    };
}
