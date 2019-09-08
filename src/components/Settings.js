// Change settings. Initially, it is just for changing the user name.

import React from 'react';

import {StyledSettings,
        StyledSettingsHeading,
        StyledSettingsForm} from './styles/StyledSettings';

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
            <StyledSettings>
                <StyledSettingsHeading>
                    <h2>Settings</h2>
                </StyledSettingsHeading>
                <StyledSettingsForm onSubmit={this.handleSubmit}>
                    Enter your name
                    <br />
                    <input type="text"
                        className="settingsNameChange"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <br />
                    <input
                        className="settingsNameChangeSubmit"
                        type="submit"
                        value="Change Name"
                    />
                </StyledSettingsForm>
            </StyledSettings>
        );
    }
}

export default Settings;
