import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img href={props.hudl} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Year: </strong> {props.class}
          </li>
          <li>
            <strong>Ht/Wt: </strong> {props.measurables}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
