import React from "react";
import NavBarList from "./NavBarList";
import NavBarBottom from "./NavBarBottom";
import "../Nav.css";

export default function NavBarSide() {
  return (
    <header className="nav-sidebar" > 

    <div className="navtop">
      <img src="../images/nav-icon.png" />
    </div>

    <div className="navmid">
      <NavBarList style={{backgroundColor: "#F0F7FF"}} name="Overview" img="../images/overview-icon.png" />
      <NavBarList name="Transactions" img="../images/transactions-icon.png" />
      <NavBarList name="Cards" img="../images/cards-icon.png" />
      <NavBarList name="Invoices" img="../images/invoices-icon.png" />
      <NavBarList name="Goals" img="../images/goals-icon.png" />
      <NavBarList name="Settings" img="../images/settings-icon.png" />
    </div>

    <div className="navbottom">
      <NavBarBottom />
    </div>

    </header>
  );
}