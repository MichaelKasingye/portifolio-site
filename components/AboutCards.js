import React from "react";
import cards from "../styles/AboutCards.module.css";

import Link from "next/link";

function Cards({ title, desc, img, path }) {
  return (
    <Link href={path}>
      <a target="_blank" rel="noopener noreferrer"> 
    <div className={cards.height}>
  
      <div className="card h-100" 
      className={cards.introCards}>
        {img && <img src={img} className="card-img-top h-50" className={cards.image} alt="..." />}
        
        <div className="card-body">
          <h5 className="card-title text-l " className={cards.orange}>
            {title}
          </h5>
          <p className="card-text text-secondary " >
            {desc}
          </p>

          {/* <Link href={path}>
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Order {title}
            </button>
          </Link> */}
        </div>
       
      </div>
    </div>
    </a>
    </Link>
  );
}

export default Cards;
