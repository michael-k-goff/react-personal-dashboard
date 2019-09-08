import styled from 'styled-components';

export const StyledTodo = styled.div`
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

export const StyledTodoHeader = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
`;

export const StyledTodoList = styled.div`
    width: 40vw;
    float: left;
`;

export const StyledTodoBlock = styled.div`
    float: left;
    width: 100%;
    margin-bottom: 20px;
`;

export const StyledTodoBlockTitle = styled.div`
    font-weight:bold;
    font-size: 20px;
`;

export const StyledTodoItem = styled.div`
    > div.todoTaskDescription {
        float: left;
        width: 40%;
    }
    > div.todoTaskDate {
        float: left;
        width: 40%;
    }
    > div.todoTaskComplete {
        float: left;
        width: 20%;
    }
`;

export const StyledTodoCompleteButton = styled.button`
    font-size: 12px;
    display: block;
    background-color: #4CAF50;
    border: 1px solid black;
    border-radius: 8px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:hover {
        background-color: #e7e7e7;
    }
`;

export const StyledTodoForm = styled.div`
    float: left;
    > * input.description {
        width: 100%;
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 4px;
        font-size: 18px;
        margin-bottom: 20px;
        display: block;
        :focus {
            background-color: lightblue;
        }
    }
    > * input.datebox {
        padding: 8px 15px;
        box-sizing: border-box;
        border: 2px solid black;
        border-radius: 4px;
        font-size: 18px;
        margin-bottom: 20px;
        display: block;
    }
    > * input.taskSubmit {
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

export const StyledTodoFormHeader = styled.div`
    font-weight:bold;
    font-size: 20px;
    margin-bottom: 20px;
`;
