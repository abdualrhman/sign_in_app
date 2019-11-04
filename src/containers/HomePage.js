import React from "react";
import CheckOut from "./CheckOut";
import CheckIn from "./CheckIn";
import {Container} from "../components/layouts/HomePageStyle";

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            childrenList: []
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData =()=>{
        const accessToken = "234ffdb8-0889-4be3-b096-97ab1679752c";
        const groupId = "11fc220c-ebba-4e55-9346-cd1eed714620";
        const apiUrl = `https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}`

        fetch(apiUrl)
        .then(res=> res.json())
        .then(data=>{
            this.setState({
                childrenList : data.children
            })
        });
    }
    render(){
        return(
            <Container>
                {this.state.childrenList.map(child=>{
                    const {childId, checkedIn, image:{large}, name} = child;
                    return (
                        <div key={childId}>
                            { checkedIn ? 
                                <CheckOut imageUrl={large} 
                                    checkedIn={checkedIn}
                                    childId={childId} 
                                    name={name}
                                    refetchData={()=>this.fetchData()}
                                />
                                :
                                <CheckIn imageUrl={large} 
                                    checkedIn={checkedIn}
                                    childId={childId} 
                                    name={name}
                                    refetchData={()=>this.fetchData()}
                                />
                            }
                        </div>
                )})}
            </Container>
        )
    }
}
