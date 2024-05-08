import React from "react";
import Component4Items from "./Component4Items";

export default function Component4(){
    return(
        <div>

            <h3 className="headings">Outcome Statistics</h3>

            <Component4Items 
            img="./images/comp4-cart.png" 
            bar="52%" 
            work="shopping"
            percent="52%"
            color="#F8964C" />

            <Component4Items 
            img="./images/comp4-truck.png" 
            bar="21%"
            work="Electronics"
            percent="21%" 
            color="#21A245"/>

            <Component4Items 
            img="./images/comp4-plane.png" 
            bar="74%" 
            work="Travels"
            percent="74%"
            color="#70A6E8" />

        </div>
    )
}