This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (Remainder of create-react-app boilerplate removed).

## Project Overview

This is a personal dashboard, allowing the user to set and track a personal to-do list and habits. As of this writing (September 7, 2019), the app is running [here](https://dreamy-ramanujan-eaf0fd.netlify.com/).

To run locally, clone the repo and in the project directory, run `npm start` (development mode) or `num run build` (production mode).

The project demonstrates the following technologies.

- React
- Styled Components
- CSS

### Usage

Use the buttons on the left navigation bar to access the three main modes.

- To-do: Add new tasks through the menu on the right, mark tasks as complete with the task list on the left.
- Habits: Habits are for activities that you want to maintain or avoid on an ongoing basis. On the menu on the right, mark days you fail to maintain the habit. On the left, you can view the list of habits and how long they have been maintained.
- Settings: Change user name.

Data persists through local storage in the browser.

### Future Directions

The following are some possible areas of future work.

- Add a mechanism for undoing changes.
- Add a mechanism for changing the names and/or deadlines for to-do items without having to delete them and add new ones.
- Spiffy animations.
