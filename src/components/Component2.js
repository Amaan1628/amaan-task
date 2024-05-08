import React from "react"
import Component2Items from "./Component2Items"

export default function Component2 (){
 /*return (
        <div className="comp2-main main-box">
            <h3 className="headings">Transaction History</h3>
                <div className="comp2-sub-main">
                    <Component2Items 
                    reciever="Reciever" type="Type" date="Date" amount="Amount"/>
                    <Component2Items 
                    img="" reciever="Tesco Market" type="Shopping" date="13 Dec 2020" amount="$75.67"/>
                    <Component2Items 
                    img="" reciever="Electromen Market" type="Shopping" date="14 Dec 2020" amount="$250.00"/>
                    <Component2Items 
                    img="" reciever="Fiorgio restaurant" type="Food" date="7 Dec 2020" amount="$19.50"/>
                    <Component2Items 
                    img="" reciever="John Mathew Kayne" type="Sport" date="6 Dec 2020" amount="$350"/>
                    <Component2Items 
                    img="" reciever="Ann Marlin" type="Shopping" date="31 Nov 2020" amount="$430"/>
                </div>
        </div>
    )*/
    return (
        <div className="comp2-main main-box">
            <h3 className="headings">Transaction History </h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Reciever</th>
                        <th className="grey" scope="col">Type</th>
                        <th className="grey" scope="col">Date</th>
                        <th className="price" scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Tesco Market</th>
                        <td className="grey">Shopping</td>
                        <td className="grey">13 Dec 2020</td>
                        <td className="price">$75.67</td>
                    </tr>
                    <tr>
                        <th scope="row">ElectroMen Market</th>
                        <td className="grey">Shopping</td>
                        <td className="grey">14 Dec 2020</td>
                        <td className="price">$250.00</td>
                    </tr>
                    <tr>
                        <th scope="row">Fiorgio Restaurant</th>
                        <td className="grey">Food</td>
                        <td className="grey">7 Dec 2020</td>
                        <td className="price">$19.50</td>
                    </tr>
                    <tr>
                        <th scope="row">john Mathew Kayne</th>
                        <td className="grey">Sport</td>
                        <td className="grey">6 Dec 2020</td>
                        <td className="price">$350</td>
                    </tr>
                    <tr>
                        <th scope="row">Ann Marlin</th>
                        <td className="grey">Shopping</td>
                        <td className="grey">31 Nov 2020</td>
                        <td className="price">$430</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}