import React from 'react';
import {formatDate} from '../helper';

import {StyledHabitCheckIn,
        StyledHabitCheckInFormItem,
        StyledHabitCheckInFormBody,
        StyledHabitCheckInFormSubmit,
        StyledHabitCheckInHeader} from './styles/StyledHabits';

class HabitCheckIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {dates: props.habitList.map((habit)=>"1899-12-31")};
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
            <StyledHabitCheckInFormItem key={index}>
                <div className="habitDescription">{habit.description}</div>
                <div className="habitDateForm">
                    <input
                        type="date"
                        className="checkinDatebox"
                        onChange={callbackGenerator(index)}
                    />
                </div>
            </StyledHabitCheckInFormItem>
        );
        return (
            <StyledHabitCheckIn>
                <StyledHabitCheckInHeader>
                    Last check-in was on {formatDate(this.props.habitUpdate)}. Mark any habits that were broken and the new dates from which you have kept them.
                </StyledHabitCheckInHeader>
                <form onSubmit={this.handleSubmit}>
                    <StyledHabitCheckInFormBody>
                        {habitList}
                    </StyledHabitCheckInFormBody>
                    <StyledHabitCheckInFormSubmit>
                        <input type="submit" className="checkinSubmit" value="Update" />
                    </StyledHabitCheckInFormSubmit>
                </form>
            </StyledHabitCheckIn>
        );
    }
}

export default HabitCheckIn;
