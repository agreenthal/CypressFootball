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
            {props.name}
          </li>
          <li>
            {props.position}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
