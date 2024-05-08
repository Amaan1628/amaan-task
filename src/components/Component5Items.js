import React from "react";

export default function Component5Items (props){
    return (
        <div>
            <img src={props.img}/>
            <p>{props.heading}</p>
        </div>
    )
}