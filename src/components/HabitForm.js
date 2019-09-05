import React from 'react';

class HabitFormAddNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {desc:"What to do"};
    }

    handleChangeDescription(event) {
        this.setState({desc: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddHabit(this.state.desc);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.desc} onChange={this.handleChangeDescription} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const HabitForm = (props) => {
    return (
        <div>
            <b>Add new habit.</b>
            <HabitFormAddNew onAddHabit={props.onAddHabit} />
        </div>
    );
}

export default HabitForm;
