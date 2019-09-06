// General helper stuff

// Whether to save data.
// Should generally be true, but may be false for development purposes
export const saveData = false;

// Initialize name
export const initName = () => {
    return ("userName" in window.localStorage && saveData) ?
        window.localStorage["userName"] : "Guest";
}

export const formatDate = (date) => {
    const month = ["January","February","March","April",
        "May","June","July","August","September",
        "October","November","December"
    ][date["month"]-1];
    return `${month} ${date.day}, ${date.year}`;
}
