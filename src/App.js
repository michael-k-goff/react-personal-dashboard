import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Habits from './components/Habits';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.change_screen = this.change_screen.bind(this);
        this.state = {currentScreen: "todo"};
    }

    change_screen(new_screen) {
        this.setState({currentScreen: new_screen});
    }

    render() {
        let main_screen;
        if (this.state.currentScreen === "todo") {
            main_screen = <Todo />
        }
        else if (this.state.currentScreen === "habits") {
            main_screen = <Habits />
        }
        return (
            <div className="App">
                <Dashboard onScreenChange={this.change_screen}/>
                {main_screen}
            </div>
        );
    }
}

export default App;
