import React from "react";
import {ChildPickUpTime} from "./layouts/ChildPickUpTimeStyle";

export default ({firstName, pickupHour, pickupMinute})=>(
    <ChildPickUpTime>
        {`Choose when ${firstName} will be picked up`}
        {pickupHour && (<span>{`: at ${pickupHour}:${pickupMinute}`}</span>)}
    </ChildPickUpTime>
)