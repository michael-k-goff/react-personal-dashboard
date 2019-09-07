import React from 'react';

import {StyledHabitForm,
        StyledHabitFormWrapper,
        StyledHabitFormHeader,
        StyledHabitFormDescription,
        StyledHabitFormSubmit} from './styles/StyledHabits';

class HabitFormAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {desc:""};
    }

    handleChangeDescription(event) {
        this.setState({desc: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddHabit(this.state.desc);
        this.setState({"desc":""});
    }

    render() {
        return (
            <StyledHabitForm>
                <form onSubmit={this.handleSubmit}>
                    <p>Description of Habit</p>
                    <StyledHabitFormDescription>
                        <input
                            type="text"
                            value={this.state.desc}
                            onChange={this.handleChangeDescription}
                        />
                    </StyledHabitFormDescription>
                    <StyledHabitFormSubmit>
                        <input type="submit" value="Submit" />
                    </StyledHabitFormSubmit>
                </form>
            </StyledHabitForm>
        );
    }
}

const HabitForm = (props) => {
    return (
        <StyledHabitFormWrapper>
            <StyledHabitFormHeader>
                Add new habit.
            </StyledHabitFormHeader>
            <HabitFormAddNew onAddHabit={props.onAddHabit} />
        </StyledHabitFormWrapper>
    );
}

export default HabitForm;
