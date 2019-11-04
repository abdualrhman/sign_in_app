import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-top:20px;
`;

const Profile = styled.div`
    text-align:center;
    img{
        border-radius: 50%;
        width:200px;
        height:200px;
    }
    p{
        margin:10px 0;
        font-size:20px;
    }
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
        background-color:#9a161a;
        color:#fff;
    }
    input[type="button"]{
        background-color:#b3b3b3;
        color:#525252;
    }
`;
export {Container, Profile, Form};