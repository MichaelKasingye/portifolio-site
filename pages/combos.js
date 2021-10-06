import React from "react";
import Meta from "../components/Meta";
import Title from "../components/Title";
import Coursel from "../components/Coursel";

import ProductItem from "../components/ProductItem";
import home from "../styles/Home.module.css";

function headsets(props) {
  return (
    <div>
      <Meta title="foodiiy" />
      <Coursel image=" https://images.pexels.com/photos/3228803/pexels-photo-3228803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="Combos"/>
      <Title title="Combos" />
      <div className={home.cardsHome} id="products">
        <ProductItem />
      </div>
    </div>
  );
}

export default headsets;
