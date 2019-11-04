import React from "react";
import Popup from "reactjs-popup";
import {ChildIcon} from "../components/layouts/ChildIconStyle";
import {Container, HourButton, MinuteButton, Form} from "../components/layouts/CheckInStyle"
import {ModalContentStyle} from "../components/layouts/ModalContentStyle";
import ChildPickUpTime from "../components/ChildPickUpTime";

export default class Home extends React.Component{

    state={
        open: false,
        pickupHour: null,
        pickupMinute: "00",
    }
    openModal=()=>{
        this.setState({
            open: true
        })
    }
    closeModal=()=>{
        this.setState({
            open: false
        })
    }
    pickupTimeHandler = e=>{
        e.preventDefault();
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    submitHandler= async e =>{
        e.preventDefault();
        const {pickupHour, pickupMinute} = this.state;
        const accessToken = "234ffdb8-0889-4be3-b096-97ab1679752c";
        const childId = this.props.childId;
        const apiUrl = `https://tryfamly.co/api/v2/children/${childId}/checkins`;
        // validate
        if(pickupHour){
            const data = {
                accessToken,
                pickupTime: `${pickupHour}:${pickupMinute}`
            }
            // submit the check out
            await fetch(apiUrl, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            });
            // update home page
            await this.props.refetchData();
            this.closeModal();
        }
    }


    render(){
        const {pickupHour, pickupMinute} = this.state;
        const {checkedIn, imageUrl, name, childId} = this.props;
        const hourRange = ["8", "9", "10", "11", "12", "13", "14", "15", "16"];
        const minuteRange = ["00", "15", "30", "45"];

        return(
            <div>
                <ChildIcon key={childId} 
                    onClick={this.openModal} checkedIn={checkedIn}
                >
                    <img src={imageUrl} alt={name.fullName}/>
                    <i className="fas fa-check-circle"></i>
                    <p>{name.firstName}</p>
                </ChildIcon>  
    
                <Popup  
                    open={this.state.open}
                    onClose={this.closeModal}
                    closeOnDocumentClick
                    modal
                    contentStyle={ModalContentStyle}
                >
                    <Container>
                        <ChildPickUpTime 
                            pickupHour={pickupHour}
                            pickupMinute={pickupMinute}
                            firstName={name.firstName}    
                        /><br/>
                            {hourRange.map(hour=>(
                                        <HourButton key={hour} 
                                            onClick={this.pickupTimeHandler} 
                                            value={hour}
                                            picked={hour === pickupHour}
                                            name="pickupHour"
                                        >
                                            {hour}
                                        </HourButton>
                            ))}
                            <br/>
                            {pickupHour && (
                                    minuteRange.map(item=>(
                                            <MinuteButton key={item} 
                                                onClick={this.pickupTimeHandler}   
                                                value={item}
                                                picked={item === pickupMinute}
                                                name="pickupMinute"
                                            >
                                                {`${pickupHour}:${item}`}
                                            </MinuteButton>  
                                    ))
                            )}
                        <Form>
                            <input type="button" onClick={this.closeModal} value="Close"/>
                            <input type="submit" onClick={this.submitHandler} value="Sign in"/>
                        </Form>
                    </Container>
                </Popup>
            </div>
        )
    }
}