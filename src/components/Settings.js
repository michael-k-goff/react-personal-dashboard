// Change settings. Initially, it is just for changing the user name.

import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name: props.name};
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        this.props.onChangeName(this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                <input type="submit" value="Change Name" />
            </form>
        );
    }
}

export default Settings;
