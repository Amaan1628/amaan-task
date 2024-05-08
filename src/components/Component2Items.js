import React from "react";

export default function Component2Items(props) {
    return (
    <div>
        <span className="price">{props.reciever}</span>
        <span className="grey">{props.type}</span>
        <span className="grey">{props.date}</span>
        <span className="price">{props.amount}</span>
    </div>
    )
}