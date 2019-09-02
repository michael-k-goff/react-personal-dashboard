// Some helper functions that manage the to-do list.

// The format for storing a single to-do item is as follows.
// {description: "...", "year":yyyy,"month":mm,"day":dd}
// Date fields may be blank, in which case the item has an indefinite due date.

// The full todo list is a regular list of single items.

// Will eventually be initialized to be empty, but for now some test values
export const initTodo = () => {
    var arr = [
        {description:"Task A", year:2020, month:1, day:1},
        {description:"Task Gamma", year:2019, month:12, day:31},
        {description:"Task Aleph", year:2020, month:3, day:31},
        {description:"Late Task", year:2019, month:8, day:15}
    ];
    return arr.sort(todoCompare);
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
    var overdue = [];
    var overdue_index = [];
    var upcoming = [];
    var upcoming_index = [];
    for (var i=0; i<todoList.length; i++) {
        if (todoCompare(todoList[i], cur_date_todo) < 0) {
            overdue = overdue.concat(todoList[i]);
            overdue_index = overdue_index.concat(i);
        }
        else {
            upcoming = upcoming.concat(todoList[i]);
            upcoming_index = upcoming_index.concat(i);
        }
    }
    var result = []
    if (overdue.length > 0) {
        result = result.concat([["Overdue", overdue, overdue_index]]);
    }
    if (upcoming.length > 0) {
        result = result.concat([["Upcoming", upcoming, upcoming_index]]);
    }
    return result;
}

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
