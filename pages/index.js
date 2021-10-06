import Meta from "../components/Meta";
import Header from "../components/Header";
import Title from "../components/Title";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import { introCards } from "../library/introCards";
import home from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={home.container} id="home">
      <Meta title="Home" />
      <Header />
      <Title title="Foodiiy" />
      <div className={home.cardsHome} id="products">
        {introCards.map((info) => (
          <Cards
            img={info.image}
            title={info.title}
            desc={info.description}
            path={info.path}
          />
        ))}
      </div>

      <Title title="Order" />
      <div className={home.contacts} id="contact">
        <Contact />
      </div>
    </div>
  );
}
