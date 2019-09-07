import styled from 'styled-components';

export const StyledDashboard = styled.div`
    background: rgba(161, 164, 79, 0.8);
    width: 15%;
    height: 100%;
    float: left;
`;

export const StyledGeneralInfo = styled.div`
    padding: 5px;
    > p{
        margin-bottom: 18px;
    }
`;

export const StyledWelcome = styled.h1`
    font-size: 20px;
    padding: 5px;
    margin: 0px;
`;

export const StyledDashboardButton = styled.button`
    font-size: 24px;
    display: block;
    width: 100%;
    background-color: #008CBA;
    border: 1px solid black;
    border-radius: 8px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:hover {
        background-color: #e7e7e7;
    }
`;
