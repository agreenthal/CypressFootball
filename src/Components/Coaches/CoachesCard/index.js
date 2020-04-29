import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="container">
        <ul>
          <div className="row">
            <div className="col">
              <li className="name">
                <strong>{props.name}</strong>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <li>
                <strong>Position:</strong> {props.position}
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div >
  );
}

export default FriendCard;
