import React from 'react';
import {formatDate} from '../helper';

class HabitCheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {dates: props.habitList.map((habit)=>"1899-12-31"), habitUpdate:props.habitUpdate};
    }

    handleSubmit(event) {
        event.preventDefault();
        for (var i=0; i<this.props.habitList.length; i++) {
            this.props.onUpdateHabit(i, this.state.dates[i]);
        }
    }

    handleDateChange(event,index) {
        event.preventDefault();
        var dates = this.state.dates;
        dates[index] = event.target.value;
        this.setState({dates: dates});
    }

    render() {
        const callbackGenerator = (index) => {
            return (e) => this.handleDateChange(e,index);
        }
        const habitList = this.props.habitList.map((habit,index) =>
            <div key={index}>
                {habit.description}
                &nbsp;&nbsp;&nbsp;&nbsp; Habit broken?
                <input type="date" onChange={callbackGenerator(index)} />
            </div>
        );
        console.log(formatDate(this.state.habitUpdate));
        return (
            <form onSubmit={this.handleSubmit}>
                Last check-in was on {formatDate(this.state.habitUpdate)}.
                {habitList}
                <input type="submit" value="Update" />
            </form>
        );
    }
}

export default HabitCheckIn;
