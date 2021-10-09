import Meta from "../components/Meta";
import Header from "../components/Header";
import Title from "../components/Title";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import AboutCards from "../components/AboutCards";

import { itemData } from "../library/data";
import { about, moreMe } from "../library/careerData";

import home from "../styles/Home.module.css";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function Home() {
  return (
    <div className={home.container} id="home">
      <Meta title="Home" />
      <Header />

      <div className={home.cardsBody} id="products">
      <Title title="Projects"/>
      <div className={home.cardsHome} id="products">
        {itemData.slice(0,3).map((info) => (
          <Cards
          key={Math.random()}
            img={info.img}
            title={info.title}
            desc={info.description}
            path={info.link}
          />
        ))}
      </div>
            <Button text="View More" link="/projects"/>
      </div>

      <div className={home.cardsBody} id="about">
      <Title title="About me" />
      <div className={home.about} id="about">
        <Paragraph text={about}/>

        <Button text="View More" link="/about"/>
      </div>
      </div>

      <div className={home.cardsBody} id="aboutMe">
      <Title title="More of me" />
      <div className={home.cardsHome} id="aboutMe">
        {moreMe.map((info) => (
          <AboutCards
          key={Math.random()}
            img={info.img}
            title={info.title}
            desc={info.description}
            path={info.link}
          />
        ))}
      </div>
            {/* <Button text="View More"/> */}
      </div>


      <div className={home.cardsBody} id="contact">
      <Title title="Reach me" />
      {/* <div className={home.cardsHome} id="products"> */}
          <Contact/>
       
      {/* </div> */}
            {/* <Button text="View More"/> */}
      </div>

    </div>
  );
}
