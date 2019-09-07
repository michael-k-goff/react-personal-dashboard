import styled from 'styled-components';

export const StyledHabits = styled.div`
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
        margin-bottom: 0px;
    }
`;

export const StyledHabitHeader = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const StyledHabitLeftColumn = styled.div`
    float: left;
    width: 40vw;
`;

export const StyledHabitList = styled.div`

`;

export const StyledHabit = styled.div`
    > div.habitDescription {
        float: left;
        width: 35%;
    }
    > div.habitDate {
        float: left;
        width: 45%;
    }
    > div.habitComplete {
        float: left;
        width: 20%;
    }
`;

export const StyledHabitCompleteButton = styled.button`
    font-size: 12px;
    display: block;
    background-color: #f44336;
    border: 1px solid black;
    border-radius: 8px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:hover {
        background-color: #e7e7e7;
    }
`;

export const StyledHabitForm = styled.div`

`;

export const StyledHabitFormWrapper = styled.div`
    float: left;
    margin-top: 30px;
`;

export const StyledHabitFormHeader = styled.div`
    font-weight:bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const StyledHabitFormDescription = styled.div`
    margin-bottom: 20px;
    > input {
        width: 100%;
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 4px;
        font-size: 18px;
        :focus {
            background-color: lightblue;
        }
    }
`;

export const StyledHabitFormSubmit = styled.div`
    > input {
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

export const StyledHabitCheckIn = styled.div`
    float: left;
    width: 20vw;
`;

export const StyledHabitCheckInHeader = styled.div`
    float: left;
    width: 30vw;
    padding-bottom: 20px;
`;

export const StyledHabitCheckInFormBody = styled.div`
    float: left;
    width: 100%;
`;

export const StyledHabitCheckInFormSubmit = styled.div`
    float: left;
    width: 100%;
    > input.checkinSubmit {
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
        margin-top: 20px;
    }
`;

export const StyledHabitCheckInFormItem = styled.div`
    > div.habitDescription {
        padding-top: 11px;
        float: left;
        width: 70%;
    }
    > div.habitQuery {
        padding-top: 11px;
        float: left;
        width: 35%;
    }
    > div.habitDateForm {
        float: left;
        width: 30%;
    }
    > * input.checkinDatebox {
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 4px;
        font-size: 14px;
    }
`;

export const StyledHabitBuffer = styled.div`
    float: left;
    width: 10vw;
`;
