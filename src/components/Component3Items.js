import React from "react";

export default function Component3items(props){
    return (
        <div className="comp3-box"> 
            <h3 className="comp3-price">{props.price}</h3>
            <p className="comp3-date">{props.date}</p>
            <img src={props.img}/>
            <p className="comp3-work">{props.work}</p>
        </div>
    )
}