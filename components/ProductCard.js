import React from "react";
import cards from "../styles/Cards.module.css";
import Link from "next/link";
import Modal from "./Modal";
function ProductCards(props) {
  function comma(inputNumber) {
    let formetedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    let splitArray = formetedNumber.split(".");
    if (splitArray.length > 1) {
      formetedNumber = splitArray[0];
    }
    return formetedNumber;
  }
  return (
    <div className={cards.heightAdjust}>
      <div className="card h-100" className={cards.productCard}>
        <img
          src={props.image}
          className="card-img-top "
          className={cards.image}
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title text-lorange" className={cards.orange}>
            {props.title}
          </h5>
          <p className="card-text " className={cards.vgrey}>
            UGX: {comma(props.price)}
          </p>
          {/* Button trigger modal */}

          {/* <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
         View 
        </button> */}
        </div>
        <div className={cards.cardButton}>
          <Modal title={props.title} price={props.price} />
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
