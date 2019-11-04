import React from "react";
import Popup from "reactjs-popup";
import {ChildIcon} from "../components/layouts/ChildIconStyle";
import {Container, Profile, Form} from "../components/layouts/CheckOutStyle";
import {ModalContentStyle} from "../components/layouts/ModalContentStyle";

export default class CheckOut extends React.Component{
    state={
        open: false
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
    submitHandler=async (e)=>{
        e.preventDefault();

        const accessToken = "234ffdb8-0889-4be3-b096-97ab1679752c";
        const childId = this.props.childId;
        const apiUrl = `https://tryfamly.co/api/v2/children/${childId}/checkout`;
        
        const data = {
            accessToken
        }
        // submit the check out
        await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        })
        // update home page
        await this.props.refetchData();
        this.closeModal();
    }
    render(){
        const {checkedIn, name, childId, imageUrl} = this.props;
        return(
            <div>
                <ChildIcon key={childId} onClick={this.openModal} 
                    checkedIn={checkedIn}
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
                        <Profile>
                            <img src={imageUrl} alt={name.fullName}/>
                            <p>{name.fullName}</p>
                        </Profile>
                        <Form>
                            <input type="button" onClick={this.closeModal} value="Close"/>
                            <input type="submit" onClick={this.submitHandler} value="Sign out" />
                        </Form>
                    </Container>
                </Popup>
            </div>
        )
    }
}
