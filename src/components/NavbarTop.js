import React from "react";

export default function NavbarTop() {
    return (
        <div className="edit">
            <div className="navtop-main">
                <div className="navtop-left">
                    <h1>Weekly sumup</h1>
                    <p>Get summary of your weekly transactions here</p>
                </div>
                <div className="navtop-right">
                    <img src="../images/navtop-icons.png"/>
                    <div className="navtop-right-1">
                        <p className="bold">Andrew</p>
                        <p className="grey">Admin account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}