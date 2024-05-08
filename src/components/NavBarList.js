import React from "react";

export default function NavBarList(props) {
  return (
    <div className="list">
      <img className="list-img" src={props.img} />
      <p className="navbar-item">{props.name}</p>
    </div>
  );
}
