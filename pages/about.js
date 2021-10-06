import React from "react";
import about from "../styles/About.module.css";
function About() {
  return (
    <div className={about.about}>
      <img
        className={about.img}
        src="https://i.pinimg.com/originals/1c/3c/18/1c3c185bb277481c67fb4fa5b6820262.jpg"
        alt="Haruna towers"
        width="500"
        height="600"
      ></img>
      <div className={about.content}>
        <p className={about.contentInfo}>
          We are an electronic shop in Ntinda at the Haruna towers building
          ground floor selling smart phone accessories and general electronic
          consumable products
        </p>
      </div>
    </div>
  );
}

export default About;
