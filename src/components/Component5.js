import React from "react";
import Component5Items from "./Component5Items";

export default function Component5 (){
    return (
        <div className="comp5-main-div">
            <div className="comp5-sub1 main-box">
                <h3 className="headings">New transaction</h3>
                <div className="comp5-sub">
                    <Component5Items 
                    img="../images/ann.png" heading="Ann"/>
                    <Component5Items 
                    img="../images/monica.png" heading="Monica"/>
                    <Component5Items 
                    img="../images/john.png" heading="John"/>
                    <Component5Items 
                    img="../images/mike.png" heading="Mike"/>
                    <Component5Items 
                    img="../images/mia.png" heading="Mia"/>
                    <Component5Items 
                    img="../images/comp3-add.png" heading="Add new"/>
                
                </div>
                <div className="comp5-sub">
                    <input placeholder="0$" className="comp5-btn1"/>
                    <button className="btn">
                        Send the transfer
                        <img  src="../images/comp5-arrow.png" />
                    </button>
                </div>
            </div>

            <div className="comp5-sub2">
                <img src="../images/comp5-design.png"/>
                <h3 className="comp5-note">Get great loan!</h3>
            </div>
        </div>
    )
}