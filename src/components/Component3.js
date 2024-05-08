import React from "react";
import Component3Items from "./Component3Items";

export default function Component3() {
    return (
        <div>
            <div className="comp3-sub-main">
                <h3 className="headings">Goals</h3>
                <img className="comp3-img" src="../images/comp3-add.png"/>
            </div>
            <div className="comp3-sub-main">
                <Component3Items price="$550" date="12/20/20" img="../images/mountain.png" work="Holidays"/>
                <Component3Items price="$200" date="12/20/20" img="../images/renov.png" work="Renovation"/>
                <Component3Items price="$820" date="12/20/20" img="../images/xbox.png" work="Xbox"/>
            </div>
        </div>
    )
}