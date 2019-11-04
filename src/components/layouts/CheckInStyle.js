import styled from "styled-components";

const Container = styled.div`
    padding-top:20px;
`;

const HourButton = styled.button`
        margin:5px;
        padding:10px;
        width:50px;
        background-color:${props=>props.picked ? "#e60000" : "#cccccc"};
        color:${props=>props.picked ? "#fff" : "#525252"};
        border:none;
        border-radius:10px;
        font-size:17px;
`;
const MinuteButton = styled.button`
        margin:5px;
        padding:10px;
        background-color:${props=>props.picked ? "#e60000" : "#cccccc"};
        color:${props=>props.picked ? "#fff" : "#525252"};
        border:none;
        border-radius:20px;
        font-size:17px;
`;

const Form = styled.form`
    margin:120px 0 20px 0;
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    input{
        width:45%;
        height:50px;
        border:none;
        border-radius:10px;
        font-size:20px;
    }
    input[type="submit"]{
        background-color:#2e703d;
        color:#fff;
    }
    input[type="button"]{
        background-color:#b3b3b3;
        color:#525252;
    }
`;
export {Container, MinuteButton, HourButton, Form};