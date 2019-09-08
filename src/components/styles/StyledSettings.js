import styled from 'styled-components';

export const StyledSettings = styled.div`
    background: rgba(255, 255, 255, 0.8);
    height: 100%;
    font-size: 16px;
    padding: 5px;
    float: left;
    > * h2 {
        padding: 0px;
        margin: 0px;
    }
    > * p {
        margin-bottom: 20px;
    }
`;

export const StyledSettingsHeading = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const StyledSettingsForm = styled.form`
    > input.settingsNameChange {
        width: 100%;
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 4px;
        font-size: 18px;
        margin-bottom:20px;
        :focus {
            background-color: lightblue;
        }
    }
    > input.settingsNameChangeSubmit {
        font-size: 24px;
        display: block;
        background-color: #008CBA;
        border: 1px solid black;
        border-radius: 8px;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        &:hover {
            background-color: #e7e7e7;
        }
    }
`;
