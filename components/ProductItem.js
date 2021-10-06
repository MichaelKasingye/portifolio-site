import React, { useEffect, useState } from "react";
import { client } from "../contenfulClient/client";
import {combos} from "../library/combos"
import Modal from "./Modal";
import ModalCard from "../components/ModalCard";
import ProductCard from "../components/ProductCard";
import modaler from "../styles/Modal.module.css";
import cards from "../styles/Cards.module.css";
import products from "../styles/Product.module.css";
function Cards({ title, desc, img }) {
  const [items, setItems] = useState();
  const [secondaryItems, setSecondaryItems] = useState();

  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then(
  //       (response) => 
  //       setItems(response.items)
  //       // console.log(response.items)
  //     )
  //     .catch((err) => console.log(err));
  // }, []);
 
  return (
    <div className={products.box}>
      {/* {typeof items != "undefined"
        ? items
            .filter((filrterdData) => filrterdData.fields.headSets === true)
            // .slice(0, 5)
            .map((product, index) => (
              <div className={products.Cardbox}>
                <ProductCard
                  key={Math.random()}
                  image={product.fields.featuredImage.fields.file.url}
                  title={product.fields.name}
                  price={product.fields.price}
                  productImages="img"
                  desc="dsdssdssddsd"
                />
              </div>
            ))
        : ""} */}
        {
          combos
          .map((product, index) => (
            <div className={products.Cardbox}>
              <ProductCard
                key={Math.random()}
                image={product.image}
                title={product.title}
                price={product.price}
                productImages="img"
                desc="dsdssdssddsd"
              />
            </div>
          ))
        }
    </div>
  );
}

export default Cards;
