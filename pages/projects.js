import React from 'react'
import { itemData } from "../library/data";
import Title from "../components/Title";
import home from "../styles/Home.module.css";
import Cards from "../components/Cards";

function projects() {
  return (
    <div>
       <Title title="Projects"/>
      <div className={home.cardsHome} id="products">
        {itemData.map((info) => (
          <Cards
          key={Math.random()}
            img={info.img}
            title={info.title}
            desc={info.description}
            path={info.link}
          />
        ))}
      </div>
    </div>
  )
}

export default projects
