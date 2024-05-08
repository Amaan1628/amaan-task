import React from "react";

export default function Component1 () {
    return (
        <div className="main-box boxx">
            <div className="com1-sub1">
                <h3 className="headings">Cards</h3>
                
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../images/comp1-main.png" class="d-block w-100" alt="carousel"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div> 

                    <div class="progress total-bar" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bar" ></div>
                    </div>

                    <div className=" comp1-1">
                    <p className="grey comp1-text"> Weekly payment limit</p>
                    <p className="price">$350.6 / $4000</p>
                    </div>
            </div>
                <div className="comp1-sub2">
                    <h2 className="comp1-p1">$2850.75</h2>
                    <p className="grey">current balance</p>
                    <p className="price comp1-p2">$1500.50</p>
                    <p className="grey">income</p>
                    <p className="price comp1-p3">$350.60</p>
                    <p className="grey">outcome</p>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                    <p className="grey">Deactivate card</p>
                </div>
        </div>
    )
}