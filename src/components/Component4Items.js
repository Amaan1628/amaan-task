import React from "react";

export default function Component4Items (props) {
    return (
        <div>
            <div className="comp4-outer">
                <img style={{width: "25px"}} src={props.img}/>
                <div className="comp4-inner">
                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style={{width: props.bar, backgroundColor: props.color}}></div>
                    </div>

                    <p className="grey">{props.work}</p>
                </div>

                <h3 className="comp3-price">{props.percent}</h3>
            </div>
        </div>
    )
}