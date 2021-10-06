import React from "react";
import cards from "../styles/Cards.module.css";
import Link from "next/link";
import Modal from "../components/Modal";
function Cards({ title, desc, img, path }) {
  return (
    <div className={cards.height}>
  
      <div className="card h-100" 
      className={cards.introCards}>
        <img src={img} className="card-img-top h-50" className={cards.image} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-lorange" className={cards.orange}>
            {title}
          </h5>
          <p className="card-text " className={cards.vgrey}>
            {desc}
          </p>

          <Link href={path}>
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Order {title}
            </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Cards;
