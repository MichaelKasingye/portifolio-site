import React from "react";
import modalerCard from "../styles/ModalCard.module.css";
function ModalCard(props) {
  return (
    <div
      className="card w-100 h-100"
      style={{ width: "18rem", height: "4rem" }}
    >
      <img
        className="card-img-top "
        style={{ height: "15rem" }}
        src={props.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">UGX: {props.price}</p>
      </div>
    </div>
  );
}

export default ModalCard;
