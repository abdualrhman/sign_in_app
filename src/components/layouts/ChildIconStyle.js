import styled from "styled-components";

const ChildIcon = styled.div`
    margin:10px 15px;
    width:70px;
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        width:70px;
        height:70px;
        border-radius:50%;
        border:${props=> props.checkedIn? "2px solid #00cc44": "2px solid #eee"};
        box-shadow: 0px 2px 4px #a6a6a6;
        :hover{
            box-shadow: 0px 3px 4px #a6a6a6;
            transition: box-shadow 0.1s ease-in-out;
        }
    }
    p{
        margin:5px 0;
        font-size:15px;
    }
    i{
        font-size:20px;
        display:${props => props.checkedIn? "inline": "none"};
        color:#00cc44;
        margin-top:-15px;
        margin-right:-50px;
        text-align:right;
    }
`;

export {ChildIcon};
